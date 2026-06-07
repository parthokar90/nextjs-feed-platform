"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { login } from "@/services/api/auth/login";

export default function LoginPage() {

    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError("");

            const res = await login(form);

            if (res?.success) {
                router.push("/");
            }

        } catch (err: any) {

            const status = err?.response?.status;

            if (status === 401) {
                setError("Invalid email or password");
            } else if (status === 422) {
                setError("Validation error");
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

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
                                    <Image src="/assets/images/google.svg" alt="Google" width={24} height={24} />
                                    <span>Or sign-in with google</span>
                                </button>

                                <div className="_social_login_content_bottom_txt _mar_b40">
                                    <span>Or</span>
                                </div>

                                {/* Error */}
                                {error && (
                                    <div style={{ color: "red", marginBottom: "10px" }}>
                                        {error}
                                    </div>
                                )}

                                {/* Form */}
                                <form className="_social_login_form" onSubmit={handleSubmit}>

                                    {/* Email */}
                                    <div className="_social_login_form_input _mar_b14">
                                        <label>Email</label> <span className="text-danger">*</span>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control _social_login_input"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="_social_login_form_input _mar_b14">
                                        <label>Password</label> <span className="text-danger">*</span>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control _social_login_input"
                                            value={form.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Button */}
                                    <div className="_social_login_form_btn _mar_t40 _mar_b60">
                                        <button type="submit" className="_btn1" disabled={loading}>
                                            {loading ? "Logging in..." : "Login now"}
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