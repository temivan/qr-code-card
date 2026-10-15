import qrCodeImage from '../assets/image-qr-code.png'

export default function QrCodeCard() {
  return (
    <article className="flex w-full max-w-80 flex-col gap-6 rounded-[20px] bg-white px-4 pt-4 pb-10 shadow-card">
      <img
        className="h-auto w-full rounded-[10px]"
        src={qrCodeImage}
        alt="QR code linking to frontendmentor.io"
        width={288}
        height={288}
      />
      <div className="flex flex-col gap-4 px-4 text-center">
        <h1 className="text-preset-1 font-bold text-slate-900">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-preset-2 text-slate-500">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </article>
  )
}
