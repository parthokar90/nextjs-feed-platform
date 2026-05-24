import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <section className="_social_registration_wrapper _layout_main_wrapper">
            {/* Shapes */}
            <div className="_shape_one">
                <Image src="/assets/images/shape1.svg" alt="" className="_shape_img" width={200} height={200} />
                <img src="/assets/images/dark_shape.svg" alt="" className="_dark_shape" width={200} height={200} />
            </div>

            <div className="_shape_two">
                <img src="/assets/images/shape2.svg" alt="" className="_shape_img" width={200} height={200} />
                <img src="/assets/images/dark_shape1.svg" alt="" className="_dark_shape _dark_shape_opacity" width={200} height={200} />
            </div>

            <div className="_shape_three">
                <img src="/assets/images/shape3.svg" alt="" className="_shape_img" width={200} height={200} />
                <img src="/assets/images/dark_shape2.svg" alt="" className="_dark_shape _dark_shape_opacity" width={200} height={200} />
            </div>

            {/* Main wrapper */}
            <div className="_social_registration_wrap">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT SIDE */}
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="_social_registration_right">

                                <div className="_social_registration_right_image">
                                    <img src="/assets/images/registration.png" alt="Image" width={200} height={200} />
                                </div>

                                <div className="_social_registration_right_image_dark">
                                    <img src="/assets/images/registration1.png" alt="Image" width={200} height={200} />
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="_social_registration_content">

                                <div className="_social_registration_right_logo _mar_b28">
                                    <img src="/assets/images/logo.svg" alt="Image" className="_right_logo" width={200} height={200} />
                                </div>

                                <p className="_social_registration_content_para _mar_b8">
                                    Get Started Now
                                </p>

                                <h4 className="_social_registration_content_title _titl4 _mar_b50">
                                    Registration
                                </h4>

                                {/* Google Button */}
                                <button type="button" className="_social_registration_content_btn _mar_b40">
                                    <img src="/assets/images/google.svg" alt="Image" className="_google_img" width={200} height={200} />
                                    <span>Register with google</span>
                                </button>

                                <div className="_social_registration_content_bottom_txt _mar_b40">
                                    <span>Or</span>
                                </div>

                                {/* FORM */}
                                <form className="_social_registration_form">

                                    {/* Email */}
                                    <div className="_social_registration_form_input _mar_b14">
                                        <label className="_social_registration_label _mar_b8">
                                            Email
                                        </label>
                                        <input type="email" className="form-control _social_registration_input" />
                                    </div>

                                    {/* Password */}
                                    <div className="_social_registration_form_input _mar_b14">
                                        <label className="_social_registration_label _mar_b8">
                                            Password
                                        </label>
                                        <input type="password" className="form-control _social_registration_input" />
                                    </div>

                                    {/* Repeat Password */}
                                    <div className="_social_registration_form_input _mar_b14">
                                        <label className="_social_registration_label _mar_b8">
                                            Repeat Password
                                        </label>
                                        <input type="password" className="form-control _social_registration_input" />
                                    </div>

                                    {/* Terms */}
                                    <div className="form-check _social_registration_form_check">
                                        <input
                                            className="form-check-input _social_registration_form_check_input"
                                            type="radio"
                                            id="terms"
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label _social_registration_form_check_label"
                                            htmlFor="terms"
                                        >
                                            I agree to terms & conditions
                                        </label>
                                    </div>

                                    {/* Button */}
                                    <div className="_social_registration_form_btn _mar_t40 _mar_b60">
                                        <button type="button" className="_social_registration_form_btn_link _btn1">
                                            Login now
                                        </button>
                                    </div>

                                </form>

                                {/* Bottom link */}
                                <div className="_social_registration_bottom_txt">
                                    <p className="_social_registration_bottom_txt_para">
                                        Already have an account?{" "}
                                        <Link href="/auth/login">
                                            Login
                                        </Link>
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}