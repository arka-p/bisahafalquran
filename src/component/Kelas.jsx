const Kelas = () => {
    return (
        <div class="bg-gray-100 pt-14 pb-14 md:pt-20 md:pb-24">
            <div class="mx-auto grid max-w-screen-xl px-6 pb-8 md:px-24 md:text-center">
                <div class="text-3xl font-bold">Tersedia 2 Pilihan Kelas</div>
                <p class="text-2xl">Sesuaikan dengan Kebutuhan Anda!</p>
            </div>
            <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-6 lg:grid-cols-2 lg:gap-8 lg:px-64">
                <div class="h-full rounded-2xl border border-zinc-200 bg-white">
                    <div class="px-8 py-4">
                        <h2 class="pb-3 text-xl font-semibold">🗓️  Kelas Weekdays</h2>
                        <ul class="list-inside list-disc space-y-1 px-6">
                            <li class="text-lg">3x Ziyadah per pekan</li>
                            <li class="text-lg">Senin – Rabu – Jumat</li>
                            <li class="text-lg">Jam belajar fleksibel</li>
                        </ul>
                    </div>
                </div>
                <div class="h-full rounded-2xl border border-zinc-200 bg-white">
                    <div class="px-8 py-4">
                        <h2 class="pb-3 text-xl font-semibold">🗓️  Kelas Weekend</h2>
                        <ul class="list-inside list-disc space-y-1 px-6">
                            <li class="text-lg">2x Ziyadah per pekan</li>
                            <li class="text-lg">Hari Sabtu - Ahad</li>
                            <li class="text-lg">Jam belajar fleksibel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Kelas