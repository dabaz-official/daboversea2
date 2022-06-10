function Footer () {
  return (
    <div>
      <footer className="flex gap-8 items-center justify-center bg-white text-gray-800 pb-2 pt-6">
        <img src="/img/logo.png" width={22} height={22} />
        <a href="https://www.instagram.com/dabaz_luvs_hot_girls/" target="_blank">Instagram</a>
        <a href="https://twitter.com/dab_az" target="_blank">Twitter</a>
        <a href="https://github.com/dabaz-official" target="_blank">Github</a>
        <a href="mailto:dieboldhan123@gmail.com">Gmail</a>
        <a href="mailto:dabaz.official@skiff.com">E-mail</a>
      </footer>
      <div className="mx-auto px-2 text-sm text-center py-3 sticky my-0 sm:px-6 sm:text-base lg:px-8 lg:text-base">
        © 2022 DabWave Inc. All rights reserved.
      </div>
    </div>
  )
}

export default Footer;