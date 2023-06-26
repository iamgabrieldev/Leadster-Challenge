import { CloudArrowDown, Download, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import * as styled from '@/styles/components/Modal'

export default function Modal() {
  return (
    <Dialog.Portal>
      <styled.Overlay />
      <styled.Content>
        <styled.CloseButton>
          <X size={24} />
        </styled.CloseButton>
        <styled.Title>
          <h3>
            <strong>Webinar:</strong> Como aumentar sua Geração de Leads feat.
            Traktor
          </h3>
        </styled.Title>
        <iframe
          width="600"
          height="394"
          src="https://www.youtube.com/embed/eVwTlOuzT0Q"
          title="Next.js está virando um framework BACK-END?!"
        />
        <styled.Description>
          <h4>Descrição</h4>
          <styled.Line />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            iusto distinctio porro molestias ducimus reprehenderit unde modi
            dolor non animi accusamus alias quisquam cumque, rem tempora magni
            esse quos! Autem?
          </p>
        </styled.Description>
        <styled.Download>
          <h4>Downloads</h4>
          <styled.Line />
          <div>
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
