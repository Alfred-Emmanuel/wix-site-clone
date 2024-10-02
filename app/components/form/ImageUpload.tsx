import React, { InputHTMLAttributes } from 'react'

type ImageUploadProps = {
    label: string
    value: File | null
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onHandleDelete: () => void
} & InputHTMLAttributes<HTMLInputElement>

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, label, value, onHandleDelete, ...others }) => {
    return (
        <div className="relative">
            <span className="text-lg font-semibold text-gray-200">{label}</span>

            <label className="w-full  h-[200px] mb-4 mt-2 flex flex-col items-center border border-gray-500 justify-center cursor-pointer focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-transparent">
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    {value && <p className="text-gray-500">{value.name}</p>}

                    {!value && <p className="text-gray-500 hover:text-gray-700">Click here to upload</p>}
                </div>

                {!value && <input type="file" name="uploadimage" accept="image/*" className="w-0 h-0 " onChange={onChange} {...others} />}
            </label>

            {value && (
                <button
                    type="button"
                    onClick={onHandleDelete}
                    className="border border-red-500 text-red-600 absolute bg-none  right-5 bottom-7 outline-none px-4 py-2 rounded-full transition-all duration-200 ease-in-out hover:bg-red-500 hover:text-black"
                >
                    Delete
                </button>
            )}
        </div>
    )
}

export default ImageUpload

// id of user on app start
