import { useMemo } from 'react';
import { useContractRead } from 'wagmi';
import HaqqVestingContract from '../../HaqqVesting.json';
import { Abi } from 'viem';

export interface Deposit {
  locked: bigint;
  unlocked: bigint;
  available: bigint;
  deposited: bigint;
  withdrawn: bigint;
  createdAt: string;
  unlockPeriod: bigint;
}

export function useDepositContract({
  depositsCount,
  address,
  depositId,
  contractAddress,
}: {
  depositsCount: undefined | number;
  address: `0x${string}`;
  contractAddress: `0x${string}`;
  depositId: bigint;
}): Deposit | undefined {
  const { data: depositContract, isLoading: isLoadingDepositContract } =
    useContractRead<Abi, 'deposits', [bigint, bigint, bigint]>({
      address: contractAddress,
      abi: HaqqVestingContract.abi as Abi,
      functionName: 'deposits',
      args: [address, depositId],
      watch: true,
    });
  const { data: amountToWithdrawNow, isLoading: isLoadingAmountToWithdrawNow } =
    useContractRead<Abi, 'amountToWithdrawNow', bigint>({
      address: contractAddress,
      abi: HaqqVestingContract.abi as Abi,
      functionName: 'amountToWithdrawNow',
      args: [address, depositId],
      watch: true,
    });
  const { data: timeBetweenPayments, isLoading: isLoadingTimeBetweenPayments } =
    useContractRead<Abi, 'amountToWithdrawNow', bigint>({
      address: contractAddress,
      abi: HaqqVestingContract.abi as Abi,
      functionName: 'TIME_BETWEEN_PAYMENTS',
      watch: true,
    });

  return useMemo(() => {
    if (
      depositsCount === 0 ||
      isLoadingDepositContract ||
      isLoadingAmountToWithdrawNow ||
      isLoadingTimeBetweenPayments ||
      depositContract === undefined ||
      amountToWithdrawNow === undefined ||
      timeBetweenPayments === undefined
    ) {
      return undefined;
    }

    const available = amountToWithdrawNow;
    const [timestamp, sumInWeiDeposited, sumPaidAlready] = depositContract;
    const deposited = sumInWeiDeposited;
    const withdrawn = sumPaidAlready;
    const unlocked = BigInt(sumPaidAlready) + BigInt(available);
    const locked = deposited - unlocked;

    return {
      locked,
      unlocked,
      available,
      deposited,
      withdrawn,
      createdAt: new Date(Number(timestamp) * 1000).toISOString(),
      unlockPeriod: timeBetweenPayments,
    };
  }, [
    amountToWithdrawNow,
    depositContract,
    depositsCount,
    isLoadingAmountToWithdrawNow,
    isLoadingDepositContract,
    isLoadingTimeBetweenPayments,
    timeBetweenPayments,
  ]);
}
