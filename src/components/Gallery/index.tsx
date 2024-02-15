import { useState } from 'react'
import { GalleryItem } from '../../Pages/Home'
import Section from '../Section'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import closeIcon from '../../assets/images/close.png'
import { Action, Item, Items, Modal, ModalContent } from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Gallery" bgColor="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`media ${index + 1} from ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="click to zoom in the image"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={closeIcon}
              alt="close-icon"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img className="imgWrapper" src={modal.url} alt="poped-content" />
          ) : (
            <iframe
              className="imgWrapper"
              frameBorder={0}
              src={modal.url}
              allow="autoplay"
              allowFullScreen
            />
          )}
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
