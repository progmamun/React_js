import React from 'react';
import PageTitle from '../../../components/elements/PageTitle';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../components/elements/Loader';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  image: yup
    .mixed()
    .test('required', 'You need to provide a file', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'The file is too large', (value, context) => {
      return value && value[0] && value[0].size <= 200000;
    })
    .test('type', 'We only support jpeg', function (value) {
      return value && value[0] && value[0].type === 'image/jpeg';
    }),
});

const AddService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const { data: services, isLoading } = useQuery('services', () =>
  //   fetch('https://secret-dusk-46242.herokuapp.com/service').then((res) =>
  //     res.json()
  //   )
  // );

  const imageStorageKey = '9898d74d96232e8aa8ab3cbd1b719668';

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const service = {
            title: data.title,
            liOne: data.featureOne,
            liTwo: data.featureTwo,
            liThree: data.featureThree,
            liFour: data.featureFour,
            liFive: data.featureFive,
            liSix: data.featureSix,
            img: img,
          };
          // send to your database
          fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(service),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success('service added successfully');
                reset();
              } else {
                toast.error('Failed to add the service');
              }
            });
        }
      });
  };

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  return (
    <>
      <PageTitle title='Add-New-Service'></PageTitle>
      <section className='addService'>
        <div className='container'>
          <h2 className='text-2xl'>Add a New Service</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text-db'>Service Title</span>
              </label>
              <input
                type='text'
                placeholder='Your Service name'
                className='input input-bordered w-full'
                {...register('title', {
                  required: {
                    value: true,
                    message: 'Title is Required',
                  },
                })}
              />
              <label className='label'>
                {errors.name?.type === 'required' && (
                  <span className='label-text-db-alt text-red-500'>
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text-db'>Service Feature</span>
              </label>
              <input
                type='text'
                placeholder='Your Feature'
                className='input input-bordered w-full'
                {...register('featureOne', {
                  required: {
                    value: true,
                    message: 'Feature is Required',
                  },
                })}
              />
              <label className='label'>
                {errors.featureOne?.type === 'required' && (
                  <span className='label-text-db text-red-500'>
                    {errors.featureOne.message}
                  </span>
                )}
              </label>
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text-db'>Service Feature</span>
              </label>
              <input
                type='text'
                placeholder='Your Feature'
                className='input input-bordered w-full'
                {...register('featureTwo', {
                  required: {
                    value: true,
                    message: 'Feature is Required',
                  },
                })}
              />
              <label className='label'>
                {errors.featureTwo?.type === 'required' && (
                  <span className='label-text-db text-red-500'>
                    {errors.featureTwo.message}
                  </span>
                )}
              </label>
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text-db'>Service Feature</span>
              </label>
              <input
                type='text'
                placeholder='Your Feature'
                className='input input-bordered w-full'
                {...register('featureThree', {
                  required: {
                    value: true,
                    message: 'Feature is Required',
                  },
                })}
              />
              <label className='label'>
                {errors.featureThree?.type === 'required' && (
                  <span className='label-text-db text-red-500'>
                    {errors.featureThree.message}
                  </span>
                )}
              </label>
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text-db'>Service Feature</span>
              </label>
              <input
                type='text'
                placeholder='Your Feature'
                className='input input-bordered w-full'
                {...register('featureFour', {
                  required: {
                    value: true,
                    message: 'Feature is Required',
                  },
                })}
              />
              <label className='label'>
                {errors.featureFour?.type === 'required' && (
                  <span className='label-text-db text-red-500'>
                    {errors.featureFour.message}
                  </span>
                )}
              </label>
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text-db'>Service Feature</span>
              </label>
              <input
                type='text'
                placeholder='Your Feature'
                className='input input-bordered w-full'
                {...register('featureFive')}
              />
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text-db'>Service Feature</span>
              </label>
              <input
                type='text'
                placeholder='Your Feature'
                className='input input-bordered w-full'
                {...register('featureSix')}
              />
            </div>

            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text-db'>Photo</span>
              </label>
              <input
                type='file'
                className='input-bordered w-full text-white'
                {...register('image', {
                  required: {
                    value: true,
                    message: 'Image is Required',
                  },
                })}
              />

              <label className='label'>
                {errors.image?.type === 'required' && (
                  <span className='label-text-db text-red-500'>
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className='btn w-full text-white'
              type='submit'
              value='Add'
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default AddService;

