const CustomButton = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    return (
      <button
        className={`flex justify-center items-center gap-2 px-2 py-3 lg:py-4 border font-articulat-cf tracking-wide xs:text-xs md:text-md font-semibold leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-white text-black border-black"
      } rounded-full w-2/3 max-w-[200px] `}
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
  
  export default CustomButton;