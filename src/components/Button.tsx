export default function Button({
  text,
  onClick: handleFunction,
}: {
  text: string;
  onClick: () => void;
}) {
  return <button onClick={handleFunction}>{text}</button>;
}
