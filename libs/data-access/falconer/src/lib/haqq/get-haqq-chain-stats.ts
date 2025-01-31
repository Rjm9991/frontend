import { FALCONER_ENDPOINT } from '../../constants';
import { FalconerRequestInit } from '../../types';

export interface FalconerChainStats {
  accounts: string;
  transactionsIn24Hour: string;
  consensusFinality: string;
  transactionAvgCost: string;
  coinomicsEra: string;
  coinomicsEmissionRate: string;
  supply: string;
  coinomicsWillBeMinted: string;
}

export async function getHaqqChainStats(options: Partial<FalconerRequestInit>) {
  const requestUrl = new URL('/haqq/chain_stats', FALCONER_ENDPOINT);
  const response = await fetch(requestUrl, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error('chain stats fetch failed');
  }

  const responseJson = await response.json();

  return responseJson as FalconerChainStats;
}
