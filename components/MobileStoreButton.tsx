const MobileStoreButton = ({
  url,
  height = 75,
  width = 255,
}: {
  url: string
  height: number
  width: number
}) => {
  const image =
    'https://upload.wikimedia.org/wikipedia/commons/9/91/Download_on_the_App_Store_RGB_blk.svg'
  const style = {
    background: `url(${image}) no-repeat`,
    backgroundSize: 'contain',
    display: 'inline-block',
    overflow: 'hidden',
    textDecoration: 'none',
    height: '100%',
    width: '100%',
    padding: '5px',
  }

  return (
    <div style={{ height, width, display: 'inline-block' }}>
      <a style={style} href={url} target="_blank" rel="noopener noreferrer">
        &nbsp;
      </a>
    </div>
  )
}

export default MobileStoreButton
