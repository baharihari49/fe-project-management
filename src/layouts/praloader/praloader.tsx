export const PraLoader = ({ loading }: { loading: boolean }) => {
  return (
    <>
      <style>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .bouncing-dots {
          display: flex;
          justify-content: space-evenly;
          width: 60px;
        }

        .dot {
          width: 10px;
          height: 10px;
          background-color: #2563EB;
          border-radius: 50%;
          animation: bounce 1.5s infinite;
        }

        .dot:nth-child(1) {
          animation-delay: 0s;
        }

        .dot:nth-child(2) {
          animation-delay: 0.3s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.6s;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
      <div className={`${loading ? `` : `hidden`}`}>
        <div
          className={`${
            loading ? `` : `hidden`
          } fixed inset-0 z-40 bg-black/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`}
          data-aria-hidden="true"
          aria-hidden="true"
        ></div>
        <div
          className={`loader-container z-50 w-screen h-screen absolute top-0 left-0`}
        >
          <div className="bouncing-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};
