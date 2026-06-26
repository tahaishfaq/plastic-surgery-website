"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { consultationContent } from "@/data/consultation";
import { procedureOptions, validateConsultation } from "@/lib/validation";

const defaultValues = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  procedure: procedureOptions[0],
  preferredConsultationDate: "",
  isInternationalPatient: "no",
  message: "",
  privacyConsent: false,
  website: "",
};

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="text-sm text-brand-ink" role="alert">
      {message}
    </p>
  );
}

function FormField({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-brand-ink">
        {label}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  );
}

export default function ConsultationFormSection() {
  const [submitState, setSubmitState] = useState({ status: "idle", message: "" });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues });

  const onSubmit = async (values) => {
    setSubmitState({ status: "idle", message: "" });

    const parsed = validateConsultation({
      ...values,
      privacyConsent: values.privacyConsent ? true : undefined,
    });

    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (typeof field === "string") {
          setError(field, { message: issue.message });
        }
      });
      return;
    }

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitState({
          status: "error",
          message: result.message || consultationContent.errorMessage,
        });
        return;
      }

      setSubmitState({
        status: "success",
        message: consultationContent.successMessage,
      });
      reset(defaultValues);
    } catch {
      setSubmitState({
        status: "error",
        message: consultationContent.errorMessage,
      });
    }
  };

  const fieldClass =
    "min-h-12 w-full rounded-[2px] border border-brand-line bg-brand-white px-4 text-sm text-brand-ink outline-none transition-[border-color,box-shadow] duration-200 focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(168,141,112,0.18)]";

  return (
    <section id="consultation" className="scroll-mt-24 bg-brand-paper px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start lg:gap-16 xl:gap-20">
          <aside className="max-w-md lg:sticky lg:top-28">
            <h2 className="font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl lg:text-[3.25rem]">
              {consultationContent.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-brand-body sm:text-lg">{consultationContent.description}</p>

            <div className="mt-10 space-y-4 border-t border-brand-line pt-10">
              {consultationContent.contactPaths.map((path) => {
                const Icon = path.kind === "whatsapp" ? MessageCircle : Phone;

                return (
                  <a
                    key={path.id}
                    href={path.href}
                    className="group flex items-start justify-between gap-4 border border-brand-line bg-brand-white px-5 py-4 transition-colors duration-200 hover:border-brand-primary/50"
                  >
                    <div className="flex items-start gap-3">
                      <Icon aria-hidden="true" className="mt-0.5 shrink-0 text-brand-primary" size={18} strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-bold text-brand-ink">{path.label}</p>
                        <p className="mt-1 text-sm leading-6 text-brand-body">{path.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="shrink-0 text-brand-primary transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
                      size={16}
                    />
                  </a>
                );
              })}
            </div>
          </aside>

          <div className="border border-brand-line bg-brand-white p-6 shadow-[0_24px_60px_-44px_rgba(43,35,30,0.22)] sm:p-8 lg:p-10">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="fullName" label="Full name" error={errors.fullName?.message}>
                  <input
                    id="fullName"
                    className={fieldClass}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.fullName)}
                    {...register("fullName")}
                  />
                </FormField>

                <FormField id="email" label="Email" error={errors.email?.message}>
                  <input
                    id="email"
                    type="email"
                    className={fieldClass}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    {...register("email")}
                  />
                </FormField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="phone" label="Phone" error={errors.phone?.message}>
                  <input
                    id="phone"
                    type="tel"
                    className={fieldClass}
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    {...register("phone")}
                  />
                </FormField>

                <FormField id="country" label="Country" error={errors.country?.message}>
                  <input
                    id="country"
                    className={fieldClass}
                    autoComplete="country-name"
                    aria-invalid={Boolean(errors.country)}
                    {...register("country")}
                  />
                </FormField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  id="preferredConsultationDate"
                  label="Preferred consultation date"
                  error={errors.preferredConsultationDate?.message}
                >
                  <input
                    id="preferredConsultationDate"
                    type="date"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.preferredConsultationDate)}
                    {...register("preferredConsultationDate")}
                  />
                </FormField>

                <FormField id="procedure" label="Procedure of interest" error={errors.procedure?.message}>
                  <select
                    id="procedure"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.procedure)}
                    {...register("procedure")}
                  >
                    {procedureOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <fieldset className="flex flex-col gap-3">
                <legend className="text-sm font-medium text-brand-ink">Are you an international patient?</legend>
                <div className="flex flex-wrap gap-6">
                  <label className="inline-flex min-h-11 items-center gap-2 text-sm text-brand-body">
                    <input type="radio" value="yes" {...register("isInternationalPatient")} />
                    Yes
                  </label>
                  <label className="inline-flex min-h-11 items-center gap-2 text-sm text-brand-body">
                    <input type="radio" value="no" {...register("isInternationalPatient")} />
                    No
                  </label>
                </div>
                <FieldError message={errors.isInternationalPatient?.message} />
              </fieldset>

              <FormField id="message" label="Additional details (optional)" error={errors.message?.message}>
                <textarea
                  id="message"
                  rows={4}
                  className={`${fieldClass} min-h-[120px] py-3`}
                  aria-invalid={Boolean(errors.message)}
                  {...register("message")}
                />
              </FormField>

              <div className="flex flex-col gap-2">
                <label className="flex items-start gap-3 text-sm leading-6 text-brand-body">
                  <input type="checkbox" className="mt-1 size-4 rounded-[2px]" {...register("privacyConsent")} />
                  <span>I agree that my details may be used to respond to this consultation request.</span>
                </label>
                <FieldError message={errors.privacyConsent?.message} />
              </div>

              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
                {...register("website")}
              />

              <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? consultationContent.submittingLabel : consultationContent.submitLabel}
              </Button>

              {submitState.message ? (
                <p
                  className={`text-sm leading-6 ${submitState.status === "success" ? "text-brand-success" : "text-brand-ink"}`}
                  role="status"
                >
                  {submitState.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
