"use client";
import { Button } from "@/components/ui/button";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface DriverFormState {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  staffNumber: string;
  pin: string;
  licenseNumber: string;
  licenseExpiry: string;
  address: string;
  status: "active" | "inactive";
}

interface FieldProps {
  label: string;
  placeholder: string;
  name: keyof DriverFormState;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  maxLength?: number;
  inputStyle?: React.CSSProperties;
}

export default function DriverForm() {
  const [form, setForm] = useState<DriverFormState>({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    staffNumber: "",
    pin: "",
    licenseNumber: "",
    licenseExpiry: "",
    address: "123 Main St, Anytown, USA",
    status: "active",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    // Add your submit logic here
  };

  const handleCancel = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      staffNumber: "",
      pin: "",
      licenseNumber: "",
      licenseExpiry: "",
      address: "123 Main St, Anytown, USA",
      status: "active",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 700,
        margin: "auto",
        color: "#222",
        lineHeight: 1.3,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px 64px",
          marginBottom: 24,
        }}
      >
        {/* Left Column */}
        <Field
          label="Full Name"
          placeholder="e.g. Liam Bentley"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
        />
        {/* Right Column */}
        <Field
          label="Email Address"
          placeholder="e.g. john.doe@gmail.com"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <Field
          label="Phone Number"
          placeholder="e.g. 00881122334"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <Field
          label="Date of Birth"
          placeholder="mm/dd/yyyy"
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
          inputStyle={{ paddingLeft: 6 }}
        />

        <Field
          label="Staff Number (for login)"
          placeholder="e.g. 00881122334"
          name="staffNumber"
          value={form.staffNumber}
          onChange={handleChange}
        />
        <Field
          label="PIN (3-5 digits)"
          placeholder="Enter a 3 to 5 digit pin"
          name="pin"
          type="password"
          maxLength={5}
          value={form.pin}
          onChange={handleChange}
        />

        <Field
          label="License Number"
          placeholder="e.g. 00881122334"
          name="licenseNumber"
          value={form.licenseNumber}
          onChange={handleChange}
        />
        <Field
          label="License Expiry Date"
          placeholder="mm/dd/yyyy"
          name="licenseExpiry"
          type="date"
          value={form.licenseExpiry}
          onChange={handleChange}
          inputStyle={{ paddingLeft: 6 }}
        />
      </div>

      <div style={{ marginBottom: 24 }}>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          style={{
            width: "100%",
            border: "none",
            borderBottom: "1px solid #ccc",
            padding: "4px 0",
            outline: "none",
            color: "#555",
          }}
        />
      </div>

      <div style={{ marginBottom: 48 }}>
        <div
          style={{
            marginBottom: 6,
          }}
        >
          Status
        </div>

        <label
          htmlFor="active"
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginRight: 24,
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <input
            id="active"
            type="radio"
            name="status"
            value="active"
            checked={form.status === "active"}
            onChange={handleChange}
            style={{ marginRight: 6 }}
          />
          Active
        </label>

        <label
          htmlFor="inactive"
          style={{
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <input
            id="inactive"
            type="radio"
            name="status"
            value="inactive"
            checked={form.status === "inactive"}
            onChange={handleChange}
            style={{ marginRight: 6 }}
          />
          Inactive
        </label>
      </div>

      <div style={{ textAlign: "right" }} className="space-x-2">
        <Button type="button" onClick={handleCancel} variant={"outline"}>
          Cancel
        </Button>
        <Button
          type="submit"
          style={{
            backgroundColor: "#1476ff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Save Driver
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  placeholder,
  name,
  value,
  onChange,
  type = "text",
  maxLength,
  inputStyle,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        style={{
          display: "block",
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        maxLength={maxLength}
        style={{
          width: "100%",
          border: "none",
          borderBottom: "1px solid #ccc",
          padding: "4px 0",
          outline: "none",
          ...inputStyle,
        }}
      />
    </div>
  );
}
