const SmallButton = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    return (
      <button
        className={`flex justify-center items-center gap-2 px-1 m-1 py-1 border font-articulat-cf tracking-wide text-xs font-semibold leading-none rounded-sm ${fullWidth && "w-full"}`}
      >
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    );
  };
  
  export default SmallButton;