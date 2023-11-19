import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useEffect } from "react";


const image_hosting_key = import.meta.env.VITE_IMAGEBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdatedItem = () => {
    const {name, category, recipe, price, _id} = useLoaderData();



    const { register, handleSubmit ,reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };
    
    return (
        <div>
            <SectionTitle heading="update item" />
            <div className="px-12 py-3 bg-[#D1A054] mx-14 mb-5 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>

                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />

                    </div>

                    <div className="flex gap-6">
                        {/* category */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>

                            <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Category</option>
                                <option value="soup">Soup</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>

                            </select>


                        </div>

                        {/* price */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input {...register("price", { required: true })} type="number" placeholder="price" className="input input-bordered w-full" />

                        </div>



                    </div>


                    {/* recipe details */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>

                        </label>
                        <textarea {...register("recipe")} className="textarea textarea-bordered h-36" placeholder="Recipe Details"></textarea>

                    </div>

                    {/* chose file  */}

                    <div className="my-6">
                        <input {...register("image", { required: true })} type="file" className="file-input  w-full max-w-xs" />
                    </div>

                    <div className="flex justify-center items-center my-5">
                        <button style={{ background: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }} className="btn text-white">
                            Update Recipe Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatedItem;