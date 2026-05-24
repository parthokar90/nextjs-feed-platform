import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <section className="_social_login_wrapper _layout_main_wrapper">

            {/* Shapes */}
            <div className="_shape_one">
                <Image src="/assets/images/shape1.svg" alt="" className="_shape_img" width={200} height={200} />
                <Image src="/assets/images/dark_shape.svg" alt="" className="_dark_shape" width={200} height={200} />
            </div>

            <div className="_shape_two">
                <Image src="/assets/images/shape2.svg" alt="" className="_shape_img" width={200} height={200} />
                <Image src="/assets/images/dark_shape1.svg" alt="" className="_dark_shape _dark_shape_opacity" width={200} height={200} />
            </div>

            <div className="_shape_three">
                <Image src="/assets/images/shape3.svg" alt="" className="_shape_img" width={200} height={200} />
                <Image src="/assets/images/dark_shape2.svg" alt="" className="_dark_shape _dark_shape_opacity" width={200} height={200} />
            </div>

            {/* Main wrapper */}
            <div className="_social_login_wrap">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Image */}
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="_social_login_left">
                                <div className="_social_login_left_image">
                                    <Image
                                        src="/assets/images/login.png"
                                        alt="Login"
                                        className="_left_img"
                                        width={800}
                                        height={600}
                                        priority       
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="_social_login_content">

                                <div className="_social_login_left_logo _mar_b28">
                                    <Image
                                        src="/assets/images/logo.svg"
                                        alt="Buddy Script Logo"
                                        className="_left_logo"
                                        width={150}
                                        height={50}
                                        priority
                                    />
                                </div>

                                <p className="_social_login_content_para _mar_b8">
                                    Welcome back
                                </p>

                                <h4 className="_social_login_content_title _titl4 _mar_b50">
                                    Login to your account
                                </h4>

                                {/* Google Button */}
                                <button type="button" className="_social_login_content_btn _mar_b40">
                                    <Image src="/assets/images/google.svg" alt="Google" className="_google_img" width={24} height={24} />
                                    <span>Or sign-in with google</span>
                                </button>

                                <div className="_social_login_content_bottom_txt _mar_b40">
                                    <span>Or</span>
                                </div>

                                {/* Form */}
                                <form className="_social_login_form">

                                    {/* Email */}
                                    <div className="_social_login_form_input _mar_b14">
                                        <label htmlFor="email" className="_social_login_label _mar_b8">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control _social_login_input"
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="_social_login_form_input _mar_b14">
                                        <label htmlFor="password" className="_social_login_label _mar_b8">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control _social_login_input"
                                        />
                                    </div>

                                    {/* Remember + Forgot */}
                                    <div className="row">
                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                            <div className="form-check _social_login_form_check">
                                                <input
                                                    className="form-check-input _social_login_form_check_input"
                                                    type="radio"     
                                                    id="remember"
                                                    name="remember"
                                                    defaultChecked
                                                />
                                                <label
                                                    className="form-check-label _social_login_form_check_label"
                                                    htmlFor="remember"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                            <div className="_social_login_form_left">
                                                <Link href="/auth/forgot-password" className="_social_login_form_left_para">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div className="_social_login_form_btn _mar_t40 _mar_b60">
                                        <button type="submit" className="_btn1">
                                            Login now
                                        </button>
                                    </div>
                                </form>

                                {/* Register link */}
                                <div className="_social_login_bottom_txt">
                                    <p className="_social_login_bottom_txt_para">
                                        Don&apos;t have an account?{" "}
                                        <Link href="/auth/register">
                                            Create New Account
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