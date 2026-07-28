'use client'

import React, { useState } from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Eye, EyeOff } from 'lucide-react'

import { Control, FieldPath } from 'react-hook-form'

import z from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = name === 'password'

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">
                        {label}
                    </FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <div className="relative">
                                <Input
                                    placeholder={placeholder}
                                    className="input-class"
                                    type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
                                    autoComplete="off"
                                    {...field}
                                />
                                {isPassword && (
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                )}
                            </div>
                        </FormControl>
                        <FormMessage
                            className="form-message mt-2"
                        />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput