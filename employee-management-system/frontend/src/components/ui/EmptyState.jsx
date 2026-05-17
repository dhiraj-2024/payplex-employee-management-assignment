const EmptyState = ({ message }) => {
    return (
        <div
            className="
        bg-white
        rounded-2xl
        p-10
        text-center
        shadow-sm
      "
        >
            <h2 className="text-xl font-semibold text-gray-700">
                {message}
            </h2>
        </div>
    );
};

export default EmptyState;