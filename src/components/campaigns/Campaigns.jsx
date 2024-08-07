import Social from '../social/Social'
import { Helmet } from 'react-helmet'
export default function Campaigns() {
  return (
    <>
      <Helmet>
        <title>Kampanyalar | Plise-Sineklik</title>
        <meta name="description" content="En son kampanyalarımızı inceleyin" />
        <meta
          name="keywords"
          content="kampanyalar, plise, sineklik,hurma sineklik,hurma,konyaaltı sineklik,lara sineklik"
        />
      </Helmet>
      <div className="relative flex justify-center min-h-[71vh] bg-gray-500 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="./videos/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative w-[80%] flex flex-col items-center text-white p-4 z-10">
          <div className="md:my-4 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">KAMPANYALAR</h2>
            <div className="w-96 h-2 bg-red-500 rounded-md"></div>
          </div>
          <div className="text-center">
            <h3 className="text-3xl">
              Antalya Plise Sineklik olarak, kurulduğumuz günden bu yana müşteri
              memnuniyetini hedeflemekte ve garanti etmekteyiz. Katlanır, pileli
              ve akordeon sineklik çeşitleri için güvenilir hizmet ve hızlı
              montaj sunuyoruz. <br />
              <span className="text-red-600">
                Kampanyalar için takipte kalın
              </span>
            </h3>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}
