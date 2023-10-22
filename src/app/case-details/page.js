import { useRouter } from 'next/router';

const CaseGrid = () => {
    const cases = [
      {
        id: 1,
        title: "Título 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet dui a dui sagittis, eu volutpat velit posuere. Proin auctor convallis elementum. Aliquam accumsan dui quis consectetur facilisis. Fusce faucibus hendrerit magna non pharetra. Phasellus iaculis euismod mauris in molestie. Vivamus vitae ligula justo. Cras felis justo, tincidunt eget libero quis, laoreet rutrum lectus. Nullam id dolor sollicitudin, cursus odio in, varius nisi. Donec odio neque, dignissim sed viverra sit amet, fermentum sed eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed pretium quam lectus, in finibus sem fringilla quis.",
        likes: 10,
        URL: "https://www.youtube.com/watch?v=UpWxiU9Cds0&ab_channel=ETICAENLASORGANIZACIONES", 
      },
      {
        id: 2,
        title: "Título 2",
        description: "Proin scelerisque lorem urna, et rutrum metus iaculis eu. Etiam consequat magna nec fermentum suscipit. Aliquam id placerat libero. Nunc pharetra molestie egestas. Nam diam felis, consectetur ac congue in, dictum vel felis. Vivamus aliquam convallis luctus. Fusce tempor tincidunt vehicula. Praesent vestibulum suscipit efficitur. Nunc congue felis at sem porttitor feugiat.",
        likes: 2,
      },
      {
        id: 3,
        title: "Título 3",
        description: "Proin scelerisque lorem urna, et rutrum metus iaculis eu. Etiam consequat magna nec fermentum suscipit. Aliquam id placerat libero. Nunc pharetra molestie egestas. Nam diam felis, consectetur ac congue in, dictum vel felis. Vivamus aliquam convallis luctus. Fusce tempor tincidunt vehicula. Praesent vestibulum suscipit efficitur. Nunc congue felis at sem porttitor feugiat.",
        likes: 0,
      },
      {
        id: 4,
        title: "Título 4",
        description: "Proin scelerisque lorem urna, et rutrum metus iaculis eu. Etiam consequat magna nec fermentum suscipit. Aliquam id placerat libero. Nunc pharetra molestie egestas. Nam diam felis, consectetur ac congue in, dictum vel felis. Vivamus aliquam convallis luctus. Fusce tempor tincidunt vehicula. Praesent vestibulum suscipit efficitur. Nunc congue felis at sem porttitor feugiat.",
        likes: 30,
      },
      {
        id: 5,
        title: "Título 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet dui a dui sagittis, eu volutpat velit posuere. Proin auctor convallis elementum. Aliquam accumsan dui quis consectetur facilisis. Fusce faucibus hendrerit magna non pharetra. Phasellus iaculis euismod mauris in molestie. Vivamus vitae ligula justo. Cras felis justo, tincidunt eget libero quis, laoreet rutrum lectus. Nullam id dolor sollicitudin, cursus odio in, varius nisi. Donec odio neque, dignissim sed viverra sit amet, fermentum sed eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed pretium quam lectus, in finibus sem fringilla quis.",
        likes: 20,
      },
      {
        id: 6,
        title: "Título 6",
        description: "Proin scelerisque lorem urna, et rutrum metus iaculis eu. Etiam consequat magna nec fermentum suscipit. Aliquam id placerat libero. Nunc pharetra molestie egestas. Nam diam felis, consectetur ac congue in, dictum vel felis. Vivamus aliquam convallis luctus. Fusce tempor tincidunt vehicula. Praesent vestibulum suscipit efficitur. Nunc congue felis at sem porttitor feugiat.",
        likes: 6,
      },
      {
        id: 7,
        title: "Título 7",
        description: "Proin scelerisque lorem urna, et rutrum metus iaculis eu. Etiam consequat magna nec fermentum suscipit. Aliquam id placerat libero. Nunc pharetra molestie egestas. Nam diam felis, consectetur ac congue in, dictum vel felis. Vivamus aliquam convallis luctus. Fusce tempor tincidunt vehicula. Praesent vestibulum suscipit efficitur. Nunc congue felis at sem porttitor feugiat.",
        likes: 3,
      },
      {
        id: 8,
        title: "Título 8",
        description: "Proin scelerisque lorem urna, et rutrum metus iaculis eu. Etiam consequat magna nec fermentum suscipit. Aliquam id placerat libero. Nunc pharetra molestie egestas. Nam diam felis, consectetur ac congue in, dictum vel felis. Vivamus aliquam convallis luctus. Fusce tempor tincidunt vehicula. Praesent vestibulum suscipit efficitur. Nunc congue felis at sem porttitor feugiat.",
        likes: 2,
      },
    ];
}

function CaseDetails() {
    const router = useRouter();
    const { id } = router.query; 
    return(
        <div>
            hola
        </div>
    )
};

export default CaseDetails;