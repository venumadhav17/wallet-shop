"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white py-1'>
      <nav
        aria-label='Global'
        className='container mx-auto flex items-center justify-between p-6 lg:px-8'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image src='/wallet-logo.webp' alt='logo' width={200} height={80} />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='size-6' />
          </button>
        </div>
        <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
          <Link href='#' className='text-lg font-normal text-gray-900'>
            Home
          </Link>
          <Link href='#' className='text-lg font-normal text-gray-900'>
            About
          </Link>
          <Link href='#' className='text-lg font-normal text-gray-900'>
            Products
          </Link>
          <Link href='#' className='text-lg font-normal text-gray-900'>
            Testimonials
          </Link>
        </PopoverGroup>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Button>
            <Send size={30} className='pe-1' />
            Contact Us
          </Button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                alt=''
                src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                className='h-8 w-auto'
              />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Features
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Marketplace
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Company
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
