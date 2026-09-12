import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { academe } from '@/routes';

export default function Academe() {
    return (
        <>
            <Head title="Academe" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                
        <h1>This is Laravel</h1>   


            </div>
        </>
    );
}

Academe.layout = {
    breadcrumbs: [
        {
            title: 'Academe',
            href: '/academe',
        },
    ],
};
