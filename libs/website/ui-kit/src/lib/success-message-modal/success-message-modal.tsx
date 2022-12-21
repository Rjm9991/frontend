import { Button } from '../button/button';
import { Heading } from '../heading/heading';

export function Ruler({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="200"
      viewBox="0 0 40 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        y1="11.5"
        x2="40"
        y2="11.5"
        stroke="#0D0D0E"
        stroke-opacity="0.24"
      />
      <line
        y1="24.0713"
        x2="20"
        y2="24.0713"
        stroke="#0D0D0E"
        stroke-opacity="0.24"
      />
      <line
        y1="36.6431"
        x2="20"
        y2="36.6431"
        stroke="#0D0D0E"
        stroke-opacity="0.4"
      />
      <line
        y1="49.2144"
        x2="20"
        y2="49.2144"
        stroke="#0D0D0E"
        stroke-opacity="0.5"
      />
      <line
        y1="61.7856"
        x2="20"
        y2="61.7856"
        stroke="#0D0D0E"
        stroke-opacity="0.6"
      />
      <line
        y1="74.3569"
        x2="20"
        y2="74.3569"
        stroke="#0D0D0E"
        stroke-opacity="0.7"
      />
      <line y1="86.9287" x2="20" y2="86.9287" stroke="#252528" />
      <line y1="99.5" x2="40" y2="99.5" stroke="#0D0D0E" />
      <line y1="112.071" x2="20" y2="112.071" stroke="#252528" />
      <line
        y1="124.643"
        x2="20"
        y2="124.643"
        stroke="#0D0D0E"
        stroke-opacity="0.7"
      />
      <line
        y1="137.214"
        x2="20"
        y2="137.214"
        stroke="#0D0D0E"
        stroke-opacity="0.6"
      />
      <line
        y1="149.786"
        x2="20"
        y2="149.786"
        stroke="#0D0D0E"
        stroke-opacity="0.5"
      />
      <line
        y1="162.357"
        x2="20"
        y2="162.357"
        stroke="#0D0D0E"
        stroke-opacity="0.4"
      />
      <line
        y1="174.929"
        x2="20"
        y2="174.929"
        stroke="#0D0D0E"
        stroke-opacity="0.24"
      />
      <line
        y1="187.5"
        x2="40"
        y2="187.5"
        stroke="#0D0D0E"
        stroke-opacity="0.24"
      />
    </svg>
  );
}

export function SuccessMessageModal() {
  return (
    <div className="relative flex items-center justify-between bg-white text-haqq-black rounded-[10px] max-w-[343px] sm:max-w-[473px] lg:max-w-[623px] px-[16px] sm:px-[32px] lg:px-[62px]">
      <div className="text-center mx-[70px] my-[45px]">
        <Heading className="mb-[24px] sm:mb-[32px]">
          Your application has been accepted
        </Heading>
        <Button variant={3}>Go back</Button>
      </div>

      <Ruler className="absolute h-full w-auto top-0 left-[16px] sm:left-[32px] sm:h-[96%] sm:top-[2%]" />
      <Ruler className="absolute h-full w-auto top-0 right-[16px] sm:right-[32px] sm:h-[96%] sm:top-[2%] scale-x-[-1]" />
    </div>
  );
}
