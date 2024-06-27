"use client";
import Image from "next/image";

import styles from "./contactus.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from 'next/router';

type Brandtwo = {
    email: string;
    phone: string;
    address: string;
    contact_us_page_image: string;
};

export const ContactUs = () => {
    const [brandtwo, setBrandtwo] = useState<Brandtwo | null>(null);

    const fetchBrandtow = async () => {
        try {
            const response = await fetch(
                "https://cupofchange-eg.com/dashboard/api/settings"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            if (data && data.data) {
                setBrandtwo({
                    email: data.data.email,
                    phone: data.data.phone,
                    address: data.data.address,
                    contact_us_page_image: data.data.contact_us_page_image,
                });
            } else {
                console.error("Empty response received");
            }
        } catch (error) {
            console.error("Error fetching Brand:", error);
        }
    };
    useEffect(() => {
        fetchBrandtow();
    }, []);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        phone: "",
        message: "",
    });
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://cupofchange-eg.com/dashboard/api/inquiries",
                formData
            );
            console.log("Form submission successful:", response.data);
            window.location.href = '/thanks'; 
        } catch (error) {
            if (error.response && error.response.data.errors) {
                const errorMessages = Object.keys(error.response.data.errors)
                    .map(field => error.response.data.errors[field].join(", "));
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    html: `<p>Failed to submit form due to validation errors:</p><ul><li>${errorMessages.join("</li><li>")}</li></ul>`,
                });
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error setting up the request:", error.message);
            }
        }
    };
    return (
        <div className={styles.contact_us}>
            {brandtwo && (
                <div className={styles.contact_us__image}>
                    <Image
                        src={brandtwo.contact_us_page_image}
                        alt=""
                        layout="responsive"
                        width={0}
                        height={0}
                    />
                </div>
            )}
            <div className={styles.contact_us__form}>
                <h5>WRITE US FOR ANY INQUIRY.</h5>
                <form action="" onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                        <input
                            placeholder="Full Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Email Address"
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Country"
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Mobile Number"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                    ></textarea>
                    <button type="submit" className={styles.submit}>
                        Submit
                    </button>
                </form>
                {brandtwo && (
                    <div className={styles.address}>
                        <div className={styles.address__details}>
                            <h6>ADDRESS</h6>
                            <p>
                                <span>&#40;</span> {brandtwo.address}{" "}
                                <span>&#41;</span>
                            </p>
                        </div>
                        <div className={styles.address__details}>
                            <h6>EMAIL</h6>
                            <p>
                                <u>{brandtwo.email}</u>
                            </p>
                        </div>
                        <div className={styles.address__details}>
                            <h6>Mobile Phone</h6>
                            <div>
                                <u>{brandtwo.phone}</u> <u>+94 76 333 2979</u>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
