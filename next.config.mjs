/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    }
};

export default nextConfig;


// si ponemos     hostname: '**'
// acepta cualquier tipo de imagen y de cualquier host