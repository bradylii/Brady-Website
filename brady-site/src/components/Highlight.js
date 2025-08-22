import '../App.css';
export default function Highlight({ children }) {
  return (
    <span className="highlight-text">
      {children}
    </span>
  );
}