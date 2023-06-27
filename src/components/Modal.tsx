import { CloudArrowDown, Download, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import * as styled from '@/styles/components/Modal'
import { Video } from '@/interfaces/Video'

export default function Modal({ title, description, url }: Video) {
  return (
    <Dialog.Portal>
      <styled.Overlay />
      <styled.Content>
        <styled.CloseButton>
          <X size={24} />
        </styled.CloseButton>
        <styled.Title>
          <h2>
            <strong>Webinar:</strong> {title}
          </h2>
        </styled.Title>
        <styled.Iframe src={url} />
        <styled.Description>
          <h3>Descrição</h3>
          <styled.Line />
          <p>{description}</p>
        </styled.Description>
        <styled.Download>
          <h3>Downloads</h3>
          <styled.Line />
          <div className="tags-downloads">
            <div className="xls">
              <CloudArrowDown weight="regular" size={16} />
              <p>Spreadsheet.xls</p>
            </div>
            <div className="doc">
              <CloudArrowDown weight="regular" size={16} />
              <p>Document.doc</p>
            </div>
            <div className="ppt">
              <CloudArrowDown weight="regular" size={16} />
              <p>Presentation.ppt</p>
            </div>
          </div>
        </styled.Download>
      </styled.Content>
    </Dialog.Portal>
  )
}
