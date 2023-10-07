import { Container, MarkdownText, Text } from '@haqq/islamic-website-ui-kit';
import { SubscribeForm } from '@haqq/islamic-website/forms';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

export interface RoadmapPeriod {
  title: string;
  goals: string[];
  isAchieved?: boolean;
}

function RoadmapBgImg() {
  return (
    <div
      className={clsx(
        'absolute z-[-1] h-[382px] w-[382px] rtl:scale-x-[-1] md:h-[1300px] md:w-[1300px]',
        'top-[-200px] ltr:right-[-135px] rtl:left-[-135px]',
        'md:top-[-370px] ltr:md:right-[-555px] rtl:md:left-[-555px]',
        'lg:top-[-460px] ltr:lg:right-[-460px] rtl:lg:left-[-460px]',
      )}
    >
      <svg
        viewBox="0 0 1300 1300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M725.088 0H755.35V30.1807H725.088V0ZM694.826 60.3614V30.1807H725.088V60.3614H694.826ZM604.028 150.913V120.726V90.5453V60.3614H634.303H664.552H694.826L694.813 90.5453H664.552H634.303L634.29 120.726V150.913H604.028ZM573.767 181.097V150.913H604.028V181.097H573.767ZM573.754 211.743H543.492V211.28V181.56V181.097H573.767L573.754 181.56V211.28V211.743ZM604.028 241.927H573.767L573.754 211.743H604.028V241.927ZM694.826 332.478H664.552H634.303H604.028V302.295V272.114V241.927H634.29V272.114L634.303 302.295H664.552H694.813L694.826 332.478ZM725.088 362.66H694.826V332.478H725.088V362.66ZM725.088 362.66H755.35V392.84H725.088V362.66ZM785.637 362.66H755.374V332.478H785.637V362.66ZM876.421 241.927L876.434 272.114V302.295V332.478H846.173H815.911H785.637V302.295H815.911H846.173L846.16 272.114V241.927H876.421ZM906.696 211.743V241.927H876.421V211.743H906.696ZM906.696 181.097H936.97V181.56V211.28V211.743H906.696V211.28V181.56V181.097ZM876.421 150.913V181.097H906.696V150.913H876.421ZM846.16 120.726V150.913H876.421L876.434 120.726V90.5453V60.3614H846.173H815.911H785.637V30.1807H755.374V60.3614H785.637V90.5453H815.911H846.173L846.16 120.726Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M726.135 362.438H756.397V392.619H726.135V362.438ZM695.873 422.8V392.619H726.135V422.8H695.873ZM605.075 513.351V483.164V452.984V422.8H635.349H665.599H695.873L695.86 452.984H665.599H635.349L635.337 483.164V513.351H605.075ZM574.813 543.535V513.351H605.075V543.535H574.813ZM574.801 574.181H544.539V573.719V543.998V543.535H574.813L574.801 543.998V573.719V574.181ZM605.075 604.366H574.813L574.801 574.181H605.075V604.366ZM695.873 694.917H665.599H635.349H605.075V664.734V634.552V604.366H635.337V634.552L635.349 664.734H665.599H695.86L695.873 694.917ZM726.135 725.098H695.873V694.917H726.135V725.098ZM726.135 725.098H756.397V755.278H726.135V725.098ZM786.684 725.098H756.421V694.917H786.684V725.098ZM877.468 604.366L877.481 634.552V664.734V694.917H847.22H816.957H786.684V664.734H816.957H847.22L847.207 634.552V604.366H877.468ZM907.743 574.181V604.366H877.468V574.181H907.743ZM907.743 543.535H938.017V543.998V573.719V574.181H907.743V573.719V543.998V543.535ZM877.468 513.351V543.535H907.743V513.351H877.468ZM847.207 483.164V513.351H877.468L877.481 483.164V452.984V422.8H847.22H816.957H786.684V392.619H756.421V422.8H786.684V452.984H816.957H847.22L847.207 483.164Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M725.088 725.941H755.35V756.122H725.088V725.941ZM694.826 786.302V756.122H725.088V786.302H694.826ZM604.028 876.854V846.667V816.486V786.302H634.303H664.552H694.826L694.813 816.486H664.552H634.303L634.29 846.667V876.854H604.028ZM573.767 907.038V876.854H604.028V907.038H573.767ZM573.754 937.684H543.492V937.221V907.501V907.038H573.767L573.754 907.501V937.221V937.684ZM604.028 967.868H573.767L573.754 937.684H604.028V967.868ZM694.826 1058.42H664.552H634.303H604.028V1028.24V998.055V967.868H634.29V998.055L634.303 1028.24H664.552H694.813L694.826 1058.42ZM725.088 1088.6H694.826V1058.42H725.088V1088.6ZM725.088 1088.6H755.35V1118.78H725.088V1088.6ZM785.637 1088.6H755.374V1058.42H785.637V1088.6ZM876.421 967.868L876.434 998.055V1028.24V1058.42H846.173H815.911H785.637V1028.24H815.911H846.173L846.16 998.055V967.868H876.421ZM906.696 937.684V967.868H876.421V937.684H906.696ZM906.696 907.038H936.97V907.501V937.221V937.684H906.696V937.221V907.501V907.038ZM876.421 876.854V907.038H906.696V876.854H876.421ZM846.16 846.667V876.854H876.421L876.434 846.667V816.486V786.302H846.173H815.911H785.637V756.122H755.374V786.302H785.637V816.486H815.911H846.173L846.16 846.667Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1088.12 725.941H1118.38V756.122H1088.12V725.941ZM1057.85 786.302V756.122H1088.12V786.302H1057.85ZM967.056 876.854V846.667V816.486V786.302H997.33H1027.58H1057.85L1057.84 816.486H1027.58H997.33L997.317 846.667V876.854H967.056ZM936.794 907.038V876.854H967.056V907.038H936.794ZM936.781 937.684H906.52V937.221V907.501V907.038H936.794L936.781 907.501V937.221V937.684ZM967.056 967.868H936.794L936.781 937.684H967.056V967.868ZM1057.85 1058.42H1027.58H997.33H967.056V1028.24V998.055V967.868H997.317V998.055L997.33 1028.24H1027.58H1057.84L1057.85 1058.42ZM1088.12 1088.6H1057.85V1058.42H1088.12V1088.6ZM1088.12 1088.6H1118.38V1118.78H1088.12V1088.6ZM1148.66 1088.6H1118.4V1058.42H1148.66V1088.6ZM1239.45 967.868L1239.46 998.055V1028.24V1058.42H1209.2H1178.94H1148.66V1028.24H1178.94H1209.2L1209.19 998.055V967.868H1239.45ZM1269.72 937.684V967.868H1239.45V937.684H1269.72ZM1269.72 907.038H1300V907.501V937.221V937.684H1269.72V937.221V907.501V907.038ZM1239.45 876.854V907.038H1269.72V876.854H1239.45ZM1209.19 846.667V876.854H1239.45L1239.46 846.667V816.486V786.302H1209.2H1178.94H1148.66V756.122H1118.4V786.302H1148.66V816.486H1178.94H1209.2L1209.19 846.667Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M907.654 543.662H937.917V573.843H907.654V543.662ZM877.392 604.024V573.843H907.654V604.024H877.392ZM786.595 694.575V664.388V634.207V604.024H816.869H847.118H877.392L877.38 634.207H847.118H816.869L816.856 664.388V694.575H786.595ZM756.333 724.759V694.575H786.595V724.759H756.333ZM756.32 755.405H726.059V754.942V725.222V724.759H756.333L756.32 725.222V754.942V755.405ZM786.595 785.59H756.333L756.32 755.405H786.595V785.59ZM877.392 876.14H847.118H816.869H786.595V845.957V815.776V785.59H816.856V815.776L816.869 845.957H847.118H877.38L877.392 876.14ZM907.654 906.322H877.392V876.14H907.654V906.322ZM907.654 906.322H937.917V936.502H907.654V906.322ZM968.203 906.322H937.941V876.14H968.203V906.322ZM1058.99 785.59L1059 815.776V845.957V876.14H1028.74H998.477H968.203V845.957H998.477H1028.74L1028.73 815.776V785.59H1058.99ZM1089.26 755.405V785.59H1058.99V755.405H1089.26ZM1089.26 724.759H1119.54V725.222V754.942V755.405H1089.26V754.942V725.222V724.759ZM1058.99 694.575V724.759H1089.26V694.575H1058.99ZM1028.73 664.388V694.575H1058.99L1059 664.388V634.207V604.024H1028.74H998.477H968.203V573.843H937.941V604.024H968.203V634.207H998.477H1028.74L1028.73 664.388Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M544.619 907.161H574.882V937.341H544.619V907.161ZM514.357 967.522V937.341H544.619V967.522H514.357ZM423.559 1058.07V1027.89V997.706V967.522H453.834H484.083H514.357L514.345 997.706H484.083H453.834L453.821 1027.89V1058.07H423.559ZM393.298 1088.26V1058.07H423.559V1088.26H393.298ZM393.285 1118.9H363.023V1118.44V1088.72V1088.26H393.298L393.285 1088.72V1118.44V1118.9ZM423.559 1149.09H393.298L393.285 1118.9H423.559V1149.09ZM514.357 1239.64H484.083H453.834H423.559V1209.46V1179.27V1149.09H453.821V1179.27L453.834 1209.46H484.083H514.345L514.357 1239.64ZM544.619 1269.82H514.357V1239.64H544.619V1269.82ZM544.619 1269.82H574.882V1300H544.619V1269.82ZM605.168 1269.82H574.906V1239.64H605.168V1269.82ZM695.952 1149.09L695.965 1179.27V1209.46V1239.64H665.704H635.442H605.168V1209.46H635.442H665.704L665.691 1179.27V1149.09H695.952ZM726.228 1118.9V1149.09H695.952V1118.9H726.228ZM726.228 1088.26H756.501V1088.72V1118.44V1118.9H726.228V1118.44V1088.72V1088.26ZM695.952 1058.07V1088.26H726.228V1058.07H695.952ZM665.691 1027.89V1058.07H695.952L695.965 1027.89V997.706V967.522H665.704H635.442H605.168V937.341H574.906V967.522H605.168V997.706H635.442H665.704L665.691 1027.89Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M181.596 907.161H211.858V937.341H181.596V907.161ZM151.334 967.522V937.341H181.596V967.522H151.334ZM60.536 1058.07V1027.89V997.706V967.522H90.8103H121.06H151.334L151.321 997.706H121.06H90.8103L90.7978 1027.89V1058.07H60.536ZM30.2743 1088.26V1058.07H60.536V1088.26H30.2743ZM30.2618 1118.9H0V1118.44V1088.72V1088.26H30.2743L30.2618 1088.72V1118.44V1118.9ZM60.536 1149.09H30.2743L30.2618 1118.9H60.536V1149.09ZM151.334 1239.64H121.06H90.8103H60.536V1209.46V1179.27V1149.09H90.7978V1179.27L90.8103 1209.46H121.06H151.321L151.334 1239.64ZM181.596 1269.82H151.334V1239.64H181.596V1269.82ZM181.596 1269.82H211.858V1300H181.596V1269.82ZM242.145 1269.82H211.882V1239.64H242.145V1269.82ZM332.929 1149.09L332.942 1179.27V1209.46V1239.64H302.681H272.418H242.145V1209.46H272.418H302.681L302.668 1179.27V1149.09H332.929ZM363.204 1118.9V1149.09H332.929V1118.9H363.204ZM363.204 1088.26H393.478V1088.72V1118.44V1118.9H363.204V1118.44V1088.72V1088.26ZM332.929 1058.07V1088.26H363.204V1058.07H332.929ZM302.668 1027.89V1058.07H332.929L332.942 1027.89V997.706V967.522H302.681H272.418H242.145V937.341H211.882V967.522H242.145V997.706H272.418H302.681L302.668 1027.89Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M906.6 906.108H936.862V936.289H906.6V906.108ZM876.338 966.469V936.289H906.6V966.469H876.338ZM785.54 1057.02V1026.83V996.653V966.469H815.814H846.064H876.338L876.325 996.653H846.064H815.814L815.802 1026.83V1057.02H785.54ZM755.278 1087.2V1057.02H785.54V1087.2H755.278ZM755.266 1117.85H725.004V1117.39V1087.67V1087.2H755.278L755.266 1087.67V1117.39V1117.85ZM785.54 1148.04H755.278L755.266 1117.85H785.54V1148.04ZM876.338 1238.59H846.064H815.814H785.54V1208.4V1178.22V1148.04H815.802V1178.22L815.814 1208.4H846.064H876.325L876.338 1238.59ZM906.6 1268.77H876.338V1238.59H906.6V1268.77ZM906.6 1268.77H936.862V1298.95H906.6V1268.77ZM967.149 1268.77H936.886V1238.59H967.149V1268.77ZM1057.93 1148.04L1057.95 1178.22V1208.4V1238.59H1027.68H997.422H967.149V1208.4H997.422H1027.68L1027.67 1178.22V1148.04H1057.93ZM1088.21 1117.85V1148.04H1057.93V1117.85H1088.21ZM1088.21 1087.2H1118.48V1087.67V1117.39V1117.85H1088.21V1117.39V1087.67V1087.2ZM1057.93 1057.02V1087.2H1088.21V1057.02H1057.93ZM1027.67 1026.83V1057.02H1057.93L1057.95 1026.83V996.653V966.469H1027.68H997.422H967.149V936.289H936.886V966.469H967.149V996.653H997.422H1027.68L1027.67 1026.83Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M543.568 544.717H573.831V574.897H543.568V544.717ZM513.306 605.078V574.897H543.568V605.078H513.306ZM422.509 695.63V665.443V635.262V605.078H452.783H483.032H513.306L513.294 635.262H483.032H452.783L452.77 665.443V695.63H422.509ZM392.247 725.814V695.63H422.509V725.814H392.247ZM392.234 756.46H361.973V755.997V726.276V725.814H392.247L392.234 726.276V755.997V756.46ZM422.509 786.644H392.247L392.234 756.46H422.509V786.644ZM513.306 877.195H483.032H452.783H422.509V847.012V816.831V786.644H452.77V816.831L452.783 847.012H483.032H513.294L513.306 877.195ZM543.568 907.377H513.306V877.195H543.568V907.377ZM543.568 907.377H573.831V937.557H543.568V907.377ZM604.117 907.377H573.855V877.195H604.117V907.377ZM694.901 786.644L694.914 816.831V847.012V877.195H664.653H634.391H604.117V847.012H634.391H664.653L664.641 816.831V786.644H694.901ZM725.177 756.46V786.644H694.901V756.46H725.177ZM725.177 725.814H755.45V726.276V755.997V756.46H725.177V755.997V726.276V725.814ZM694.901 695.63V725.814H725.177V695.63H694.901ZM664.641 665.443V695.63H694.901L694.914 665.443V635.262V605.078H664.653H634.391H604.117V574.897H573.855V605.078H604.117V635.262H634.391H664.653L664.641 665.443Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M906.603 182.214H936.866V212.395H906.603V182.214ZM876.342 242.575V212.395H906.603V242.575H876.342ZM785.544 333.127V302.94V272.759V242.575H815.818H846.067H876.342L876.329 272.759H846.067H815.818L815.806 302.94V333.127H785.544ZM755.282 363.311V333.127H785.544V363.311H755.282ZM755.27 393.957H725.008V393.494V363.774V363.311H755.282L755.27 363.774V393.494V393.957ZM785.544 424.141H755.282L755.27 393.957H785.544V424.141ZM876.342 514.692H846.067H815.818H785.544V484.509V454.328V424.141H815.806V454.328L815.818 484.509H846.067H876.329L876.342 514.692ZM906.603 544.874H876.342V514.692H906.603V544.874ZM906.603 544.874H936.866V575.054H906.603V544.874ZM967.152 544.874H936.89V514.692H967.152V544.874ZM1057.94 424.141L1057.95 454.328V484.509V514.692H1027.69H997.426H967.152V484.509H997.426H1027.69L1027.68 454.328V424.141H1057.94ZM1088.21 393.957V424.141H1057.94V393.957H1088.21ZM1088.21 363.311H1118.49V363.774V393.494V393.957H1088.21V393.494V363.774V363.311ZM1057.94 333.127V363.311H1088.21V333.127H1057.94ZM1027.68 302.94V333.127H1057.94L1057.95 302.94V272.759V242.575H1027.69H997.426H967.152V212.395H936.89V242.575H967.152V272.759H997.426H1027.69L1027.68 302.94Z"
          fill="#272727"
        />
      </svg>
    </div>
  );
}

function RoadmapCard({
  period,
  isLast,
}: {
  period: RoadmapPeriod;
  isLast?: boolean;
}) {
  const { goals, isAchieved, title } = period;

  return (
    <div className="flex gap-x-[12px] md:gap-x-[16px]">
      <div className="flex flex-col items-center gap-y-[12px]">
        <div
          className={clsx(
            'h-[24px] w-[24px] lg:h-[34px] lg:w-[34px]',
            isAchieved ? 'text-islamic-primary-green' : 'text-white',
          )}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3.64683L10.5016 5.25004C9.93033 5.86128 9.12275 6.1958 8.28657 6.16754L6.09342 6.09342L6.16754 8.28657C6.1958 9.12275 5.86128 9.93033 5.25004 10.5016L3.64683 12L5.25004 13.4984C5.86128 14.0697 6.1958 14.8773 6.16754 15.7134L6.09342 17.9066L8.28657 17.8325C9.12275 17.8042 9.93033 18.1387 10.5016 18.75L12 20.3532L13.4984 18.75C14.0697 18.1387 14.8773 17.8042 15.7134 17.8325L17.9066 17.9066L17.8325 15.7134C17.8042 14.8773 18.1387 14.0697 18.75 13.4984L20.3532 12L18.75 10.5016C18.1387 9.93033 17.8042 9.12275 17.8325 8.28657L17.9066 6.09342L15.7134 6.16754C14.8773 6.1958 14.0697 5.86128 13.4984 5.25004L12 3.64683ZM12.6049 1.26262C12.2776 0.912461 11.7224 0.912461 11.3951 1.26262L8.98936 3.83665C8.82613 4.01129 8.59539 4.10687 8.35649 4.09879L4.83525 3.97979C4.35625 3.9636 3.9636 4.35625 3.97979 4.83526L4.09879 8.35649C4.10687 8.59539 4.01129 8.82613 3.83665 8.98936L1.26262 11.3951C0.912461 11.7224 0.912461 12.2776 1.26262 12.6049L3.83665 15.0106C4.01129 15.1739 4.10687 15.4046 4.09879 15.6435L3.97979 19.1647C3.9636 19.6438 4.35625 20.0364 4.83526 20.0202L8.35649 19.9012C8.59539 19.8931 8.82613 19.9887 8.98936 20.1634L11.3951 22.7374C11.7224 23.0875 12.2776 23.0875 12.6049 22.7374L15.0106 20.1634C15.1739 19.9887 15.4046 19.8931 15.6435 19.9012L19.1647 20.0202C19.6438 20.0364 20.0364 19.6438 20.0202 19.1647L19.9012 15.6435C19.8931 15.4046 19.9887 15.1739 20.1634 15.0106L22.7374 12.6049C23.0875 12.2776 23.0875 11.7224 22.7374 11.3951L20.1634 8.98936C19.9887 8.82613 19.8931 8.59539 19.9012 8.35649L20.0202 4.83526C20.0364 4.35625 19.6438 3.9636 19.1647 3.97979L15.6435 4.09879C15.4046 4.10687 15.1739 4.01129 15.0106 3.83665L12.6049 1.26262Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {!isLast && (
          <div
            className={clsx(
              'h-full w-[2px]',
              isAchieved
                ? 'bg-islamic-primary-green'
                : 'border-l-[2px] border-dotted border-[#8A8A8A]',
            )}
          />
        )}
      </div>

      <div className="flex flex-col gap-y-[12px]">
        <h3 className="rtl:font-handjet ltr:font-vcr text-[18px] uppercase leading-[26px] md:text-[22px] md:leading-[32px] lg:text-[24px] lg:leading-[34px]">
          {title}
        </h3>

        {goals.length > 1 ? (
          <div className="flex flex-col gap-y-[4px] pb-[16px]">
            {goals.map((goal, idx) => {
              return (
                <MarkdownText
                  key={`${title}-goal-${idx}`}
                  className="prose-li:my-[0]"
                >
                  {goal}
                </MarkdownText>
              );
            })}
          </div>
        ) : (
          <span className="text-[13px] leading-[20px] md:text-[14px] lg:text-base">
            <MarkdownText>{String(goals)}</MarkdownText>
          </span>
        )}
      </div>
    </div>
  );
}

export function RoadmapPage({
  roadmap,
  turnstileSiteKey,
  locale,
}: {
  roadmap: RoadmapPeriod[];
  turnstileSiteKey?: string;
  locale: string;
}) {
  const t = useTranslations('');

  return (
    <div className="flex flex-col pb-[60px] pt-[32px] text-white md:pb-[100px] md:pt-[52px] lg:pb-[140px] lg:pt-[68px]">
      <div className="overflow-x-clip">
        <Container className="relative">
          <h1 className="text-[46px] font-[600] leading-[52px] md:text-[60px] md:leading-none lg:text-[80px]">
            {t('roadmap-page.title')}
          </h1>

          <div className="mt-[48px] flex flex-col gap-y-[12px] md:mt-[44px] lg:mt-[60px] lg:gap-y-[20px]">
            {roadmap.map((period, idx) => {
              return (
                <RoadmapCard
                  period={period}
                  key={`${period.title}-${idx}`}
                  isLast={idx === roadmap.length - 1}
                />
              );
            })}
          </div>

          {turnstileSiteKey && (
            <div className="mt-[48px] flex flex-col gap-x-[28px] gap-y-[24px] rounded-[20px] bg-[#181E25B3] px-[16px] py-[24px] md:mt-[80px] lg:mt-[120px] lg:max-w-[1200px] lg:flex-row lg:items-start lg:p-[28px]">
              <Text size="small">{t('subscribe-form.text')}</Text>
              <SubscribeForm
                locale={locale}
                className="flex w-full flex-col gap-[16px] lg:flex-row"
                inputClassName="lg:min-w-[280px]"
                turnstileSiteKey={turnstileSiteKey}
              />
            </div>
          )}

          <RoadmapBgImg />
        </Container>
      </div>
    </div>
  );
}
