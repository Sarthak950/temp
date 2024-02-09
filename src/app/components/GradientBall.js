export default function GradientBall() {
  return (
    <div className="gradient-ball">
      <style jsx>
        {`
        .gradient-ball {
          position: absolute;
          height: 300px;
          width: 300px;
          background: var(--primary-blue);
          border-radius: 50%;
          right: 0;
          top: 0;
          transform: translate(50%, -50%);
          filter: blur(1000px);
          z-index: -1;
        }
      `}
      </style>
    </div>
  );
}
