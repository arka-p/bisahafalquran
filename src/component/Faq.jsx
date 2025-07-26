const Faq = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-4xl md:text-center">
                        <h2 className="text-3xl font-bold md:text-3xl">FAQ / Tanya Jawab Umum</h2>
                        <div className="space-y-4 mt-6 text-left">

                            {/* FAQ 1 */}
                            <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
                                    <h2 className="text-lg font-medium">Apa yang harus dilakukan setelah daftar?</h2>
                                    <svg
                                        className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="px-4 pt-4 text-gray-900">
                                    Setelah mendaftar, Sahabat hanya perlu menunggu konfirmasi dari admin. Pastikan nomor kontak yang terdaftar sudah benar dan aktif agar kami dapat menghubungi tanpa kendala. Jika dalam 1–2 hari belum menerima balasan, jangan ragu untuk menghubungi kami kembali.
                                </p>
                            </details>

                            {/* FAQ 2 */}
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
                                    <h2 className="text-lg font-medium">Apa saja media pembelajaran yang digunakan?</h2>
                                    <svg
                                        className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-4 pt-4 text-gray-900 space-y-3">
                                    <p>Media pembelajaran dalam program kami mencakup:</p>
                                    <ul className="list-disc list-inside space-y-1 px-2">
                                        <li>
                                            <strong>Setoran Hafalan:</strong> Disampaikan secara langsung melalui chat pribadi WhatsApp bersama pembimbing masing-masing.
                                        </li>
                                        <li>
                                            <strong>Komunitas & Motivasi:</strong> Kami menyediakan grup WhatsApp khusus untuk pengumuman, berbagi motivasi, serta informasi penting seputar program. Tenang, privasi nomor Sahabat tetap terjaga karena tidak terlihat oleh peserta lain.
                                        </li>
                                    </ul>
                                    <p className="italic">
                                        InsyaAllah, kami akan memastikan setiap peserta mendapatkan bimbingan yang efektif untuk mendukung kelancaran dan keberhasilan hafalan.
                                    </p>
                                </div>
                            </details>

                            {/* FAQ 3 */}
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
                                    <h2 className="text-lg font-medium">Saya masih terbata-bata dalam membaca?</h2>
                                    <svg
                                        className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="px-4 pt-4 text-gray-900">
                                    Sangat disarankan agar Sahabat sudah menyelesaikan Iqra 6 terlebih dahulu. Namun, insyaAllah kami tetap akan memberikan bimbingan dan membantu perbaikan bacaan (tahsin) terlebih dahulu sebelum melanjutkan ke program tahfidz.
                                </p>
                            </details>

                            {/* FAQ 4 */}
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
                                    <h2 className="text-lg font-medium">Saya ingin berhenti di tengah program?</h2>
                                    <svg
                                        className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="px-4 pt-4 text-gray-900">
                                    Jika Sahabat berhalangan untuk melanjutkan program, Sahabat bisa mengajukan cuti terlebih dahulu. Dengan begitu, Sahabat tetap memiliki kesempatan untuk melanjutkan program di waktu yang lebih tepat.
                                </p>
                            </details>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
