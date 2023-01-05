import { useMemo } from 'react';
import { useBalance } from 'wagmi';
import {
  useAddress,
  useStakingDelegationQuery,
  useStakingRewardsQuery,
} from '@haqq/shared';
import { Card, CardHeading } from '@haqq/ui-kit';

export function ShellIndexPageAccountInfo() {
  const { ethAddress, haqqAddress } = useAddress();
  const { data: balanceData } = useBalance({
    address: ethAddress,
    watch: true,
  });
  const { data: delegationInfo } = useStakingDelegationQuery(haqqAddress);
  const { data: rewardsInfo } = useStakingRewardsQuery(haqqAddress);

  const balance = useMemo(() => {
    if (!balanceData) {
      return undefined;
    }

    return {
      symbol: balanceData.symbol,
      value: Number.parseFloat(balanceData.formatted),
    };
  }, [balanceData]);

  const delegation = useMemo(() => {
    if (delegationInfo && delegationInfo.delegation_responses?.length > 0) {
      let del = 0;

      for (const delegation of delegationInfo.delegation_responses) {
        del = del + Number.parseInt(delegation.balance.amount, 10);
      }

      return del / 10 ** 18;
    }

    return 0;
  }, [delegationInfo]);

  const rewards = useMemo(() => {
    if (rewardsInfo?.total?.length) {
      const totalRewards =
        Number.parseFloat(rewardsInfo.total[0].amount) / 10 ** 18;

      return totalRewards;
    }

    return 0;
  }, [rewardsInfo]);

  if (!ethAddress) {
    return (
      <Card className="flex flex-col space-y-4 min-h-[350px] items-start justify-between flex-1">
        <div className="flex flex-1 items-center w-full">
          <div className="w-full flex-auto text-center">
            You should connect wallet first
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col space-y-4 min-h-[350px] items-start justify-between flex-1">
      {ethAddress && haqqAddress && (
        <div className="w-full">
          <CardHeading>Address</CardHeading>

          <div className="text-ellipsis overflow-hidden">{ethAddress}</div>
          <div className="text-ellipsis overflow-hidden">{haqqAddress}</div>
        </div>
      )}

      {balance && (
        <div>
          <CardHeading>Balance</CardHeading>
          <div className="font-serif font-[500] text-[42px] leading-[1.25] mb-[-10px]">
            {balance.value.toLocaleString()} ISLM
          </div>
        </div>
      )}

      <div>
        <CardHeading>Staked</CardHeading>
        <div className="text-2xl font-semibold leading-normal">
          {delegation.toLocaleString()} <span className="text-base">ISLM</span>
        </div>
      </div>

      <div>
        <CardHeading>Unclaimed rewards</CardHeading>
        <div className="text-2xl font-semibold leading-normal">
          {rewards.toLocaleString()} <span className="text-base">ISLM</span>
        </div>
      </div>
    </Card>
  );
}
