import clsx from "clsx";
interface ButtonFormProps{
    handleEditClick:()=>void,
    edit:boolean,
    loading:boolean,
    handleCancelEdit:()=>void
}
export default function ButtonForm({edit,handleCancelEdit,handleEditClick,loading}:ButtonFormProps){
    return(
        <div className="w-full flex justify-end">
          <button
            type="button"
            onClick={handleEditClick}
            className={clsx(
              ' px-8 py-2 bg-black text-white rounded-lg shadow-lg hover:scale-110 transition-all duration-200 ease-in-out',
              edit ? 'hidden' : 'block'
            )}
          >
            Edit
          </button>
          <div
            className={clsx(
              ' w-full justify-center sm:w-auto  sm:justify-normal flex-row gap-4',
              edit ? 'flex' : 'hidden'
            )}
          >
            <button
              type="button"
              className="px-2 md:px-6 py-2 bg-slate-600 text-white rounded-lg shadow-lg hover:scale-110 transition-all duration-200 ease-in-out"
              onClick={handleCancelEdit}
              disabled={loading}
            >
              Cancel Edit
            </button>
            <button
              type="submit"
              className={clsx(
                "px-2 md:px-6 py-2  bg-black text-white rounded-lg shadow-lg hover:scale-110 transition-all duration-200 ease-in-out",
                loading && 'bg-slate-300 cursor-default'
              )}
              disabled={loading}
            >
              Confirm Changes
            </button>
          </div>
        </div>
    )
}