"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { getText } from "@/lib/data";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [ideaWork, setIdeaWork] = useState<"yes" | "no" | null>(null);
  const [reason, setReason] = useState("");
  const [willSupport, setWillSupport] = useState<"yes" | "no" | null>(null);
  const [electionKnow, setElectionKnow] = useState<"yes" | "no" | null>(null);
  const [contactNumber, setContactNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name || "Anonymous",
          ideaWork,
          reason: ideaWork === "no" ? reason : "",
          willSupport: ideaWork === "yes" ? willSupport : null,
          electionKnow,
          contactNumber: electionKnow === "yes" ? contactNumber : "",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      setSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setName("");
    setIdeaWork(null);
    setReason("");
    setWillSupport(null);
    setElectionKnow(null);
    setContactNumber("");
    setSuccess(false);
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-earth-200 px-6 py-4 flex justify-between items-center">
          <h2 id="feedback-modal-title" className="text-2xl font-bold text-earth-900">
            {getText("feedback.modalTitle", lang)}
          </h2>
          <button
            onClick={handleClose}
            className="text-earth-500 hover:text-earth-700 text-2xl font-bold"
            aria-label={getText("common.ariaClose", lang)}
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <p className="text-lg text-earth-700">
                {getText("feedback.successMessage", lang)}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">
                  {getText("feedback.nameLabel", lang)}{" "}
                  <span className="text-earth-500 text-xs">
                    {getText("feedback.nameOptional", lang)}
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder={getText("feedback.nameLabel", lang)}
                />
              </div>

              {/* Will this idea work? */}
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-3">
                  {getText("feedback.ideaWorkQuestion", lang)}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="ideaWork"
                      value="yes"
                      checked={ideaWork === "yes"}
                      onChange={(e) => {
                        setIdeaWork("yes");
                        setReason("");
                      }}
                      className="mr-2"
                      required
                    />
                    {getText("feedback.yesOption", lang)}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="ideaWork"
                      value="no"
                      checked={ideaWork === "no"}
                      onChange={(e) => {
                        setIdeaWork("no");
                        setWillSupport(null);
                      }}
                      className="mr-2"
                      required
                    />
                    {getText("feedback.noOption", lang)}
                  </label>
                </div>
              </div>

              {/* Reason (if No) */}
              {ideaWork === "no" && (
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-earth-700 mb-2">
                    {getText("feedback.reasonLabel", lang)}
                  </label>
                  <textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder={getText("feedback.reasonLabel", lang)}
                    required
                  />
                </div>
              )}

              {/* Will you support? (if Yes) */}
              {ideaWork === "yes" && (
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-3">
                    {getText("feedback.supportQuestion", lang)}
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="willSupport"
                        value="yes"
                        checked={willSupport === "yes"}
                        onChange={(e) => setWillSupport("yes")}
                        className="mr-2"
                      />
                      {getText("feedback.yesOption", lang)}
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="willSupport"
                        value="no"
                        checked={willSupport === "no"}
                        onChange={(e) => setWillSupport("no")}
                        className="mr-2"
                      />
                      {getText("feedback.noOption", lang)}
                    </label>
                  </div>
                </div>
              )}

              {/* Election Question */}
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-3">
                  {getText("feedback.electionQuestion", lang)}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="electionKnow"
                      value="yes"
                      checked={electionKnow === "yes"}
                      onChange={(e) => {
                        setElectionKnow("yes");
                        setContactNumber("");
                      }}
                      className="mr-2"
                    />
                    {getText("feedback.yesOption", lang)}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="electionKnow"
                      value="no"
                      checked={electionKnow === "no"}
                      onChange={(e) => {
                        setElectionKnow("no");
                        setContactNumber("");
                      }}
                      className="mr-2"
                    />
                    {getText("feedback.noOption", lang)}
                  </label>
                </div>
              </div>

              {/* Contact Number (if Yes) */}
              {electionKnow === "yes" && (
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-earth-700 mb-2">
                    {getText("feedback.contactNumberLabel", lang)}
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder={getText("feedback.contactNumberPlaceholder", lang)}
                    required
                  />
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 border border-earth-300 text-earth-700 rounded-lg hover:bg-earth-50 transition-colors"
                >
                  {getText("common.close", lang)}
                </button>
                <button
                  type="submit"
                  disabled={submitting || !ideaWork}
                  className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {submitting ? getText("feedback.submitting", lang) : getText("feedback.submitButton", lang)}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

