import {
  FalconerChainStatsRequestInit,
  getHaqqChainStats,
} from './get-haqq-chain-stats';

const statsResponseMock = {
  accounts: '1000',
  transactionsIn24Hour: '500',
  consensusFinality: '0',
  transactionAvgCost: '0.05',
  coinomicsEra: '0',
  coinomicsEmissionRate: '0',
  supply: '10',
  coinomicsWillBeMinted: '80',
};

describe('getHaqqChainStats', () => {
  it('should return a valid FalconerChainStats object when given valid options', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(statsResponseMock),
    } as unknown as Response);

    const validOptions: Partial<FalconerChainStatsRequestInit> = {
      next: {
        revalidate: 60,
      },
    };

    // Act
    const result = await getHaqqChainStats(validOptions);

    // Assert
    expect(result).toEqual(
      expect.objectContaining({
        accounts: expect.any(String),
        transactionsIn24Hour: expect.any(String),
        consensusFinality: expect.any(String),
        transactionAvgCost: expect.any(String),
        coinomicsEra: expect.any(String),
        coinomicsEmissionRate: expect.any(String),
        supply: expect.any(String),
        coinomicsWillBeMinted: expect.any(String),
      }),
    );
  });

  it("should throw an error with message 'chain stats fetch failed' when the API returns a non-200 status code", async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false,
    } as Response);

    await expect(getHaqqChainStats({})).rejects.toThrowError(
      'chain stats fetch failed',
    );
  });
});
