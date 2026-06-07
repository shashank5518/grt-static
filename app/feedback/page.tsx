export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Share Your Feedback
        </h1>

        <p className="mt-3 text-slate-600">
          We'd love to hear your thoughts and suggestions.
        </p>

        <form
          action="https://formsubmit.co/sales.growthrealtech@gmail.com"
          method="POST"
          className="mt-8 space-y-6"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Website Feedback"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_next"
            value="https://grt-static.vercel.app/"
          />

          <div>
            <label className="block text-sm font-medium">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Feedback
            </label>

            <textarea
              name="feedback"
              rows={6}
              required
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-5 py-3 text-white"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </main>
  );
}
