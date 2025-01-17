import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface ModalSectionProps {
    toggleModal: () => void;
    isOpen: boolean;
    columnList: { id: number; linkName: string; link: string }[];
    headerTitle: string;
  }

const ModalSection: React.FC<ModalSectionProps> = ( {toggleModal, isOpen, columnList, headerTitle} ) => {
  return (
    <div id="ourCompany" className='flex flex-col gap-3'>
      <h3 onClick={toggleModal} id="title" className='text-lg lg:whitespace-nowrap font-semibold flex justify-between items-center py-3 lg:pt-0 px-1 md:px-0 border-b-[1px] md:border-b-0 cursor-pointer uppercase select-none md:pointer-events-none'>
        <span>{headerTitle}</span>

        <span className="md:hidden">
            {
                isOpen?<FaCaretUp />:<FaCaretDown />
            }
        </span>
      </h3>
      <ul className={`space-y-5 ${isOpen?'max-h-full':'max-h-0'} overflow-hidden md:max-h-full`}>
        {
            columnList.map((item)=>{
                return(
                    <li key={item.id}><a href={item.link} className="hover:underline">{item.linkName}</a></li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default ModalSection
