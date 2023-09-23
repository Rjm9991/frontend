import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  GetGovernanceParamsResponse,
  useGovernanceParamsQuery,
  useProposalListQuery,
  useSupportedChains,
  Proposal,
  useProposalTally,
} from '@haqq/shared';
import { ProposalListCard } from '../proposal-list-card/proposal-list-card';
import { Container, SpinnerLoader } from '@haqq/shell-ui-kit';
import { useNetwork } from 'wagmi';

export function ProposalList() {
  const { data: govParams } = useGovernanceParamsQuery();
  const { data: proposalsData, isFetching } = useProposalListQuery();
  const { chain } = useNetwork();
  const chains = useSupportedChains();
  const symbol =
    chain?.nativeCurrency.symbol ?? chains[0]?.nativeCurrency.symbol;
  const proposals = useMemo(() => {
    if (!proposalsData?.length) {
      return [];
    }

    return proposalsData;
  }, [proposalsData]);

  return (
    <div>
      <div className="py-[32px] lg:py-[68px]">
        <Container>
          <div className="font-serif text-[28px] uppercase leading-none sm:text-[48px] lg:text-[70px]">
            Governance
          </div>
        </Container>
      </div>

      <div>
        <Container>
          {!govParams || isFetching ? (
            <div className="pointer-events-none mx-auto flex min-h-[320px] w-full flex-1 select-none">
              <div className="flex min-h-full flex-1 flex-col items-center justify-center space-y-8">
                <SpinnerLoader />
                <div className="font-sans text-[10px] uppercase leading-[1.2em]">
                  Fetching proposals
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-[68px] grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
              {proposals.map((proposal) => {
                return (
                  <HookedProposalListCard
                    key={proposal.proposal_id}
                    proposal={proposal}
                    govParams={govParams}
                    symbol={symbol}
                  />
                );
              })}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}

function HookedProposalListCard({
  proposal,
  govParams,
  symbol,
}: {
  proposal: Proposal;
  govParams: GetGovernanceParamsResponse;
  symbol: string;
}) {
  const { data: proposalTally } = useProposalTally(proposal.proposal_id);

  if (!proposalTally) {
    return null;
  }

  return (
    <Link to={`proposal/${proposal.proposal_id}`}>
      <ProposalListCard
        proposal={proposal}
        govParams={govParams}
        symbol={symbol}
        proposalTally={proposalTally}
      />
    </Link>
  );
}
