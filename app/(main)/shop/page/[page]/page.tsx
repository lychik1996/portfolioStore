import ChoosePages from './_components/ChoosePage';
import Items from './_components/Items';
import ItemsChoose from './_components/ItemsChoose';

export default function Page({ params }: { params: { page: string } }) {
    const page = Number(params.page);
  return (
    <div className="flex-1 flex flex-col gap-3" id='target_page'>
      <div className="flex flex-row items-center h-7 lg:h-8">
        <ItemsChoose />
      </div>
      <Items page={page} />
      <ChoosePages page={page}/>
    </div>
  );
}
