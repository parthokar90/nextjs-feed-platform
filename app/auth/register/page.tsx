"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { register } from "@/services/api/auth/register";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (form.password !== form.password_confirmation) {
            setError("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            await register(form);

            router.push("/");
            router.refresh();
        } catch (err: any) {
            console.log(err);
            setError(err?.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="_social_registration_wrapper _layout_main_wrapper">

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
            <div className="_social_registration_wrap">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT SIDE */}
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="_social_registration_right">

                                <div className="_social_registration_right_image">
                                    <Image
                                        src="/assets/images/registration.png"
                                        alt="Image"
                                        width={200}
                                        height={200}
                                    />
                                </div>

                                <div className="_social_registration_right_image_dark">
                                    <Image
                                        src="/assets/images/registration1.png"
                                        alt="Image"
                                        width={200}
                                        height={200}
                                    />
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="_social_registration_content">

                                <div className="_social_registration_right_logo _mar_b28">
                                    <Image
                                        src="/assets/images/logo.svg"
                                        alt="Image"
                                        className="_right_logo"
                                        width={200}
                                        height={200}
                                    />
                                </div>

                                <p className="_social_registration_content_para _mar_b8">
                                    Get Started Now
                                </p>

                                <h4 className="_social_registration_content_title _titl4 _mar_b50">
                                    Registration
                                </h4>

                                {/* Google Button */}
                                <button type="button" className="_social_registration_content_btn _mar_b40">
                                    <Image
                                        src="/assets/images/google.svg"
                                        alt="Image"
                                        className="_google_img"
                                        width={200}
                                        height={200}
                                    />
                                    <span>Register with google</span>
                                </button>

                                <div className="_social_registration_content_bottom_txt _mar_b40">
                                    <span>Or</span>
                                </div>

                                {/* ERROR */}
                                {error && (
                                    <div style={{ color: "red", marginBottom: "10px" }}>
                                        {error}
                                    </div>
                                )}

                                {/* FORM */}
                                <form className="_social_registration_form" onSubmit={handleSubmit}>

                                    {/* Name */}
                                    <div className="_social_registration_form_input _mar_b14">
                                        <label className="_social_registration_label _mar_b8">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control _social_registration_input"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="_social_registration_form_input _mar_b14">
                                        <label className="_social_registration_label _mar_b8">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control _social_registration_input"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="_social_registration_form_input _mar_b14">
                                        <label className="_social_registration_label _mar_b8">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control _social_registration_input"
                                            value={form.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Repeat Password */}
                                    <div className="_social_registration_form_input _mar_b14">
                                        <label className="_social_registration_label _mar_b8">
                                            Repeat Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            className="form-control _social_registration_input"
                                            value={form.password_confirmation}
                                            onChange={handleChange}
                                            required
                                        />
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
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="_social_registration_form_btn_link _btn1"
                                        >
                                            {loading ? "Creating..." : "Register"}
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