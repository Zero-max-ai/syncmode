import useBackgroundStore from '../../../store/background';

const HeroSection = () => {
  const { selectedImage } = useBackgroundStore();
  console.log(selectedImage)
  return (
    <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundImage: `url(${selectedImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="flex flex-col items-center justify-center"
      >
      </div>
  )
}

export default HeroSection;
