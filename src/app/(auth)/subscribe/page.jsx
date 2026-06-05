"use client";
import React, { useState } from "react";
import { Input, Button, Checkbox, Link } from "@heroui/react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "", // নতুন ফিল্ড যোগ করা হলো
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    // ১. ফ্রন্টএন্ড ভ্যালিডেশন: পাসওয়ার্ড দুটি মিলছে কিনা চেক করা
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      setLoading(false);
      return; // কোড এখানেই থেমে যাবে, ব্যাকএন্ডে রিকোয়েস্ট যাবে না
    }

    try {
      // ব্যাকএন্ডে শুধু name, email, password পাঠালেই হবে
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Account created successfully!" });
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      } else {
        setMessage({
          type: "error",
          text: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to connect to the server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 border border-gray-200 rounded-none shadow-sm">
        {/* Header/Logo Section */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-gray-950 uppercase">
            THE BRIEFING
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create an account to personalize your news feed
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Global Alert Message */}
          {message.text && (
            <div
              className={`p-3 text-sm text-center font-medium ${
                message.type === "success"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-rose-50 text-rose-700 border border-rose-200"
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="space-y-4">
            <Input
              type="text"
              label="Full Name"
              labelPlacement="outside"
              placeholder="John Doe"
              variant="bordered"
              radius="none"
              className="font-sans text-gray-950"
              classNames={{
                inputWrapper:
                  "border-gray-300 hover:border-gray-400 focus-within:!border-black",
                label: "text-gray-700 font-medium",
              }}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <Input
              type="email"
              label="Email Address"
              labelPlacement="outside"
              placeholder="you@example.com"
              variant="bordered"
              radius="none"
              className="font-sans text-gray-950"
              classNames={{
                inputWrapper:
                  "border-gray-300 hover:border-gray-400 focus-within:!border-black",
                label: "text-gray-700 font-medium",
              }}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <Input
              type="password"
              label="Password"
              labelPlacement="outside"
              placeholder="••••••••"
              variant="bordered"
              radius="none"
              className="font-sans text-gray-950"
              classNames={{
                inputWrapper:
                  "border-gray-300 hover:border-gray-400 focus-within:!border-black",
                label: "text-gray-700 font-medium",
              }}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />

            {/* Re-enter Password Field */}
            <Input
              type="password"
              label="Re-enter Password"
              labelPlacement="outside"
              placeholder="••••••••"
              variant="bordered"
              radius="none"
              className="font-sans text-gray-950"
              classNames={{
                inputWrapper:
                  "border-gray-300 hover:border-gray-400 focus-within:!border-black",
                label: "text-gray-700 font-medium",
              }}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center justify-between">
            <Checkbox
              radius="none"
              color="default"
              classNames={{
                wrapper: "after:bg-black",
                label: "text-xs text-gray-600 select-none",
              }}
              required
            >
              I agree to the Terms of Service and Privacy Policy
            </Checkbox>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            isLoading={loading}
            radius="none"
            className="w-full bg-black text-white font-medium tracking-wide hover:bg-gray-900 transition-colors py-6 text-sm"
          >
            {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
          </Button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-black font-semibold underline underline-offset-4 hover:text-gray-700 text-sm"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
