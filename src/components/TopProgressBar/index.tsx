/*
 * Author: Gavin.wang
 * Date: 2025-04-28 10:29:06
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 11:10:20
 * FilePath: /react-vite-cli/src/components/TopProgressBar/index.tsx
 * Description:
 */
const TopProgressBar = ({
  animationDuration,
  isFinished,
  progress,
}: {
  animationDuration: number;
  isFinished: boolean;
  progress: number;
}) => (
  <div
    style={{
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      transition: `opacity ${animationDuration}ms linear`,
    }}>
    <div
      style={{
        background: '#4879e5',
        height: 2,
        left: 0,
        marginLeft: `${(-1 + progress) * 100}%`,
        position: 'fixed',
        top: 0,
        transition: `margin-left ${animationDuration}ms linear`,
        width: '100%',
        zIndex: 1031,
      }}>
      <div
        style={{
          boxShadow: '0 0 10px #4879e5, 0 0 5px #4879e5',
          display: 'block',
          height: '100%',
          opacity: 1,
          position: 'absolute',
          right: 0,
          transform: 'rotate(3deg) translate(0px, -4px)',
          width: 100,
        }}
      />
    </div>
  </div>
);

export default TopProgressBar;
