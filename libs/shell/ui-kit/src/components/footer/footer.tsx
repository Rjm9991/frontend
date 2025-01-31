import { Container } from '../container/container';

export function Footer({ commitSha }: { commitSha?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-[16px] pt-[12px]">
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div>
            <div className="text-[12px] leading-[16px] text-white/20">
              © {currentYear}{' '}
              <a
                href="http://haqq.network"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150 hover:text-white/80"
              >
                HAQQ Network
              </a>
              . All rights reserved
            </div>
          </div>
          <div>
            <div className="text-[12px] leading-[16px] text-white/20">
              <span className="inline md:hidden">version: </span>

              <CommitSha
                commitSha={commitSha}
                className="transition-colors duration-150 hover:text-white/80"
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export function CommitSha({
  commitSha,
  className,
}: {
  commitSha?: string;
  className?: string;
}) {
  return commitSha && commitSha !== 'dev' ? (
    <a
      href={`https://github.com/haqq-network/frontend/commit/${commitSha}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {commitSha.substring(0, 7)}
    </a>
  ) : (
    <a
      href="https://github.com/haqq-network/frontend"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      dev
    </a>
  );
}
