import {
  // ethToHaqq,
  // useAddress,
  useStakingActions,
  // useWallet,
  haqqToEth,
} from '@haqq/shared';
import { Button, Container } from '@haqq/shell-ui-kit';
// import { useCallback } from 'react';
import {
  // usePrepareContractWrite,
  // useContractWrite,
  useWalletClient,
  WalletClient,
} from 'wagmi';
import { abi } from '../abi';

console.log({ eth: haqqToEth('haqq17zhdkhjzc2583u6mpz77ftkl27ka6nkl54lyzc') });

const PRECOMPILED_STAKING_CONTRACT =
  '0x0000000000000000000000000000000000000800';

export function DebugPage() {
  const { undelegate } = useStakingActions();
  // const { ethAddress } = useAddress();
  // const { openSelectWallet } = useWallet();
  // const { getKey } = useGnosisContract();

  // const getPubkey = useCallback(async () => {
  //   console.log('getPubkey');
  //   const key = getKey?.();
  //   console.log({ key });
  // }, [getKey]);

  const { data: walletClient } = useWalletClient();
  console.log({ walletClient });

  return (
    <div>
      <div className="py-[32px] lg:py-[68px]">
        <Container>
          <div className="font-clash text-[28px] uppercase leading-none sm:text-[48px] lg:text-[70px]">
            Debug
          </div>
        </Container>
      </div>

      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[32px]">
          {/* {!ethAddress ? (
            <div className="flex flex-col items-center space-y-[12px] border-y border-[#ffffff26] py-[80px]">
              <div className="font-guise text-[14px] leading-[22px] md:text-[18px] md:leading-[28px]">
                This app works only inside safe app.
              </div>
            </div>
          ) : ( */}
          <div className="pb-[62px]">
            <Container>
              <div>
                <Button
                  onClick={async () => {
                    const res = await walletClient?.signMessage({
                      message: 'hello',
                    });
                    console.log({ res });
                  }}
                  variant={2}
                >
                  getPubkey()
                </Button>
              </div>
              <div>
                <Button
                  onClick={async () => {
                    // const tx = await delegate(
                    //   'haqqvaloper1p8k6xk94u24vv9dmxu3vkgg43fs3v72grkpjhm',
                    //   0.01 * 10 ** 18,
                    // );
                    // tx.domain = undefined;
                    // console.log({ tx });
                    // try {
                    //   const resp = await walletClient?.signTypedData(tx);
                    //   console.log({ resp });
                    // } catch (error) {
                    //   console.error(error);
                    // }
                  }}
                  variant={2}
                >
                  delegate
                </Button>
              </div>
              <div>
                <Button
                  onClick={async () => {
                    const tx = await undelegate(
                      'haqqvaloper1p8k6xk94u24vv9dmxu3vkgg43fs3v72grkpjhm',
                      0.01 * 10 ** 18,
                    );
                    console.log({ tx });

                    // try {
                    //   const resp = await walletClient?.signTypedData(tx);
                    //   console.log({ resp });
                    // } catch (error) {
                    //   console.error(error);
                    // }
                  }}
                  variant={2}
                >
                  undelegate
                </Button>
              </div>
              {walletClient && (
                <div>
                  <GnosisAuthContract walletClient={walletClient} />
                </div>
              )}
              {/* <div>
                <GnosisDelegateContract />
              </div> */}
            </Container>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

function GnosisAuthContract({ walletClient }: { walletClient: WalletClient }) {
  const handleAuthRequest = async () => {
    try {
      const tx = await walletClient?.writeContract({
        address: PRECOMPILED_STAKING_CONTRACT,
        abi,
        functionName: 'approve',
        args: [
          '0xe7f2b41b597757f4617341630869e931862f0786',
          BigInt(1 * 10 ** 18),
          ['delegate'],
        ],
        value: BigInt(0),
      });
      console.log({ tx });
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return (
    <div>
      <Button onClick={handleAuthRequest}>auth</Button>
    </div>
  );
}

// function GnosisDelegateContract() {
//   const { config, error } = usePrepareContractWrite({
//     address: PRECOMPILED_STAKING_CONTRACT,
//     abi,
//     functionName: 'delegate',
//     args: [
//       ethToHaqq('0xe7f2b41b597757f4617341630869e931862f0786'),
//       'haqqvaloper15eafuvcrh3c07z4g3pqgq68n3lmsyu5jd9swsy',
//       BigInt(0.25 * 10 ** 18).toString(),
//     ],
//   });
//   const { writeAsync } = useContractWrite(config);
//   console.log({ error, config });

//   return (
//     <div>
//       <Button
//         disabled={!writeAsync}
//         onClick={async () => {
//           await writeAsync?.();
//         }}
//       >
//         delegate
//       </Button>
//     </div>
//   );
// }
