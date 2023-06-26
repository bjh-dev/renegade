type TextCardProps = {
  title: string
  overview: string
  darkSection?: boolean
}

const TextCard = ({ title, overview, darkSection }: TextCardProps) => {
  return (
    <div>
      <h3
        className={`mb-2 font-bold ${
          darkSection ? `text-primary` : `text-gray-900`
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm ${darkSection ? `text-gray-100` : `text-gray-700`}`}
      >
        {overview}
      </p>
    </div>
  )
}

export default TextCard
