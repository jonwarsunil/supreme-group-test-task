import Typography from '../typography';

interface Tab {
  id: string;
  label: string;
  content: string;
  description: string;
}

interface VerticalTabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex border rounded-lg shadow-lg '>
        {/* Vertical Tab Buttons */}
        <div className='flex flex-col w-full bg-transparent'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 pl-[89px] text-left transition-all ${
                activeTab === tab.id
                  ? 'bg-transparent text-white h-[172px] border-l-2'
                  : 'h-[172px] text-[#505050] border-l-2 border-[#505050]'
              }`}
            >
              <Typography size='h3' className={`pb-2 ${activeTab === tab.id ? '!text-white' : '!text-[#505050]'}`}>
                {tab.content}
              </Typography>
              <Typography
                size='md'
                className={`pb-2 w-auto md:w-[330px] ${activeTab === tab.id ? '!text-white' : '!text-[#505050]'}`}
              >
                {tab.description}
              </Typography>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
