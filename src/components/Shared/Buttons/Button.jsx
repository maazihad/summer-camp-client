const Button = ({ label, onClick, disabled, icon: Icon }) => {
   return (
      <button disabled={disabled} onClick={onClick}
         className={`px-4 relative  disabled:opacity-70 disabled:cursor-not-allowed rounded-lg
        hover:opacity-80  transition  w-full  `}
      >
         {
            Icon && (
               <Icon size={24} className='absolute left-4 top-3' />
            )
         }
         {label}
      </button>
   );
};

export default Button;