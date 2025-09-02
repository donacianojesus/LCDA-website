'use client'

import { useState } from 'react'

interface LiveStreamProps {
  youtubeUrl?: string
  facebookUrl?: string
}

export default function LiveStream({ youtubeUrl, facebookUrl }: LiveStreamProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<'youtube' | 'facebook' | null>(null)

  const openModal = (platform: 'youtube' | 'facebook') => {
    setSelectedPlatform(platform)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPlatform(null)
  }

  const getEmbedUrl = () => {
    if (selectedPlatform === 'youtube' && youtubeUrl) {
      // Handle different YouTube URL formats
      if (youtubeUrl.includes('/live')) {
        // For live streams, convert to embed format
        const channelHandle = youtubeUrl.split('@')[1]?.split('/')[0]
        if (channelHandle) {
          // Use the channel's live stream page as embed
          return `https://www.youtube.com/embed/live_stream?channel=${channelHandle}&autoplay=1&rel=0&modestbranding=1`
        }
      } else if (youtubeUrl.includes('youtu.be/')) {
        // Short YouTube URLs
        const videoId = youtubeUrl.split('youtu.be/')[1].split('?')[0]
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      } else if (youtubeUrl.includes('v=')) {
        // Regular YouTube URLs
        const videoId = youtubeUrl.split('v=')[1]?.split('&')[0]
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      }
    }
    if (selectedPlatform === 'facebook' && facebookUrl) {
      // Convert Facebook URL to embed format
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(facebookUrl)}&show_text=false&width=560&height=315&autoplay=true`
    }
    return ''
  }

  const handlePlatformClick = (platform: 'youtube' | 'facebook') => {
    if (platform === 'youtube' && youtubeUrl?.includes('/live')) {
      // For live streams, open in new tab instead of modal
      window.open(youtubeUrl, '_blank', 'noopener,noreferrer')
    } else {
      // For regular videos, open in modal
      openModal(platform)
    }
  }

  return (
    <>
      {/* Live Stream Section */}
      <section className="section-padding bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">📺</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Watch Live Services
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us for our live worship services and stay connected with our community
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {youtubeUrl && (
              <button
                onClick={() => handlePlatformClick('youtube')}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span className="text-2xl">📺</span>
                <span>Watch on YouTube</span>
              </button>
            )}
            
            {facebookUrl && (
              <button
                onClick={() => handlePlatformClick('facebook')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span className="text-2xl">📘</span>
                <span>Watch on Facebook</span>
              </button>
            )}
          </div>
          
          {!youtubeUrl && !facebookUrl && (
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-lg">
                Live streaming links will be available during service times.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                {selectedPlatform === 'youtube' ? 'YouTube Live' : 'Facebook Live'}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-4">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={getEmbedUrl()}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${selectedPlatform} live stream`}
                />
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  {selectedPlatform === 'youtube' 
                    ? 'Streaming live on YouTube' 
                    : 'Streaming live on Facebook'
                  }
                </p>
                <button
                  onClick={closeModal}
                  className="btn-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
