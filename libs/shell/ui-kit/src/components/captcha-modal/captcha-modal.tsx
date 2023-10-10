import { useCallback, useEffect, useState } from 'react';
import Turnstile from 'react-turnstile';
import { Heading } from '../heading/heading';
import { Modal, ModalCloseButton } from '../modal/modal';
import { Checkbox } from '../checkbox/checkbox';

export const CaptchaModal = ({
  turnstileSiteKey,
  isClosable,
}: {
  turnstileSiteKey?: string;
  isClosable: boolean;
}) => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [isNotResident, setImNotResidentDubai] = useState(false);
  const [isCaptchaModalOpen, setCaptchaModalOpen] = useState(false);

  useEffect(() => {
    const tId = setTimeout(() => {
      if (!token && !isClosable) {
        setCaptchaModalOpen(true);
      } else if (token && isNotResident) {
        setCaptchaModalOpen(false);
      }
    }, 500);

    return () => {
      clearTimeout(tId);
    };
  }, [token, isClosable, isCaptchaModalOpen, isNotResident]);

  const handleCaptchaModalClose = useCallback(() => {
    if (isNotResident) {
      setCaptchaModalOpen(false);
    }
  }, [setCaptchaModalOpen, isNotResident]);

  const handleTokenChange = useCallback(
    (token: string) => {
      setToken(token);
    },
    [setToken],
  );

  return (
    <Modal onClose={handleCaptchaModalClose} isOpen={isCaptchaModalOpen}>
      <div className="rounded-[12px] bg-white pb-[36px] pl-[16px] pr-[16px] pt-[16px]">
        <div className="flex items-center justify-between">
          <Heading className="text-black" level={3}>
            &nbsp;
          </Heading>
          <ModalCloseButton
            className="text-black"
            onClick={() => {
              handleCaptchaModalClose();
            }}
          />
        </div>
        <div className="w-[340px] pl-[20px] pr-[20px]">
          <div className="font-clash text-[22px] font-[500] text-black">
            Complete the captcha and agree with restrictions
          </div>

          <div className="font-guise mb-[24px] mt-[20px] text-[12px] font-[500] text-black">
            Please complete the captcha to verify that you are not a robot.
          </div>

          {turnstileSiteKey && (
            <Turnstile
              className="w-full"
              sitekey={turnstileSiteKey}
              onVerify={handleTokenChange}
              theme="light"
              fixedSize={true}
            />
          )}

          <div className="mt-[20px] flex">
            <Checkbox
              value={isNotResident}
              onChange={setImNotResidentDubai}
              className="mr-[8px]"
            />
            <div
              className="font-guise  flex cursor-pointer text-[12px] font-[500] text-black"
              onClick={() => {
                setImNotResidentDubai(!isNotResident);
              }}
            >
              I confirm that I am not a resident of Dubai.
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
