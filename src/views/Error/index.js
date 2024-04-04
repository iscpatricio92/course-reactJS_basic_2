const ErrorComponent = ({ data: { error, status } }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <p className="text-xl">{error}</p>
    </div>
  );
};
export default ErrorComponent;
