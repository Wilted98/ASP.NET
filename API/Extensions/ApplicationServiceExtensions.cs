using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Interfaces;
using API.Services;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
          IConfiguration config)
        {
            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();


            return services;
        }
    }
}